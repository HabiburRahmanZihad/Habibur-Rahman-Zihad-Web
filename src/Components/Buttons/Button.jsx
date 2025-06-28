import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    onClick,
    href,
    target,
    className = '',
    disabled = false,
    icon: Icon,
    iconPosition = 'left',
    ...props
}) => {
    const baseClasses = 'btn transition-all duration-300 font-medium';

    const variants = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        accent: 'btn-accent',
        ghost: 'btn-ghost',
        outline: 'btn-outline',
        link: 'btn-link'
    };

    const sizes = {
        xs: 'btn-xs',
        sm: 'btn-sm',
        md: 'btn-md',
        lg: 'btn-lg'
    };

    const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

    const content = (
        <>
            {Icon && iconPosition === 'left' && (
                <Icon className="w-4 h-4 mr-2" />
            )}
            {children}
            {Icon && iconPosition === 'right' && (
                <Icon className="w-4 h-4 ml-2" />
            )}
        </>
    );

    const MotionComponent = motion.button;

    if (href) {
        return (
            <motion.a
                href={href}
                target={target}
                className={buttonClasses}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                {...props}
            >
                {content}
            </motion.a>
        );
    }

    return (
        <MotionComponent
            onClick={onClick}
            disabled={disabled}
            className={buttonClasses}
            whileHover={{ scale: disabled ? 1 : 1.05 }}
            whileTap={{ scale: disabled ? 1 : 0.95 }}
            {...props}
        >
            {content}
        </MotionComponent>
    );
};

export default Button;
