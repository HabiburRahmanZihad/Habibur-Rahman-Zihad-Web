import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin,
    FaGithub, FaTwitter, FaPaperPlane, FaCheckCircle, FaFacebook
} from 'react-icons/fa';
import Button from '../../Components/Buttons/Button';
import Swal from 'sweetalert2';
import { Link, useLocation } from 'react-router';
import emailjs from 'emailjs-com';

// Animation Variants
const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay, duration: 0.8, ease: 'easeOut' }
    })
};

const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: 'easeOut' }
    }
};

const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: 'easeOut' }
    }
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const Contact = () => {
    const location = useLocation();
    const [formData, setFormData] = useState({
        name: '', email: '', subject: '', message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const contactInfo = [
        {
            icon: FaEnvelope,
            title: 'Email',
            value: 'Habibur Rahman Zihad\'s mail',
            link: 'mailto:e241024@ugrad.iiuc.ac.bd'
        },
        {
            icon: FaPhone,
            title: 'Phone',
            value: 'Habibur Rahman Zihad\'s phone',
            link: 'tel:+8801329453598'
        },
        {
            icon: FaMapMarkerAlt,
            title: 'Location',
            value: 'Chattogram, Bangladesh',
            link: 'https://maps.google.com/?q=Chattogram,Bangladesh'
        }
    ];

    const socialLinks = [
        { icon: FaLinkedin, name: 'LinkedIn', url: 'https://linkedin.com/in/habiburrahmanzihad' },
        { icon: FaGithub, name: 'GitHub', url: 'https://github.com/HabiburRahmanZihad' },
        { icon: FaTwitter, name: 'Twitter', url: 'https://x.com/xihad_xihad' },
        { icon: FaFacebook, name: 'Facebook', url: 'https://www.facebook.com/habiburrahmanzihad.zihad' }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC;


        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message
        };

        try {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
            Swal.fire({
                title: 'Message Sent!',
                text: 'Thank you for reaching out. I\'ll get back to you soon!',
                icon: 'success',
                confirmButtonText: 'Great!',
                confirmButtonColor: '#DAA520'
            });
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error('EmailJS Error:', error);
            Swal.fire({
                title: 'Oops!',
                text: 'Something went wrong. Please try again later.',
                icon: 'error',
                confirmButtonText: 'Okay',
                confirmButtonColor: '#DAA520'
            });
        }

        setIsSubmitting(false);
    };

    return (
        <motion.div
            key={location.pathname} // ✅ triggers re-render animation
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="min-h-screen bg-base-100"
        >
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-base-100 to-base-200">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        className="space-y-4"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-primary grotesk mb-6">Get In Touch</h1>
                        <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
                            I'm always open to discussing new opportunities, creative projects,
                            or potential collaborations. Let's create something amazing together!
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info + Form */}
            <section className="py-20 bg-base-100">
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Column */}
                    <motion.div
                        variants={fadeInLeft}
                        initial="hidden"
                        animate="visible" // ✅ changed from whileInView
                    >
                        <h2 className="text-3xl font-bold text-primary grotesk mb-8">Let's Start a Conversation</h2>
                        <p className="text-lg text-base-content/70 mb-8">
                            Whether you have a project in mind, want to collaborate, or just want to say hello — I'd love to hear from you.
                        </p>

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible" // ✅ changed from whileInView
                        >
                            {contactInfo.map((info, index) => {
                                const Icon = info.icon;
                                return (
                                    <Link to={info.link} key={index} className="block" target='_blank' rel='noopener noreferrer'>
                                        <motion.div
                                            variants={fadeInUp}
                                            custom={index * 0.1}
                                            className="flex items-center p-6 mb-4 bg-base-200 rounded-xl hover:bg-base-300 transition-all duration-300 group"
                                        >
                                            <div className="p-4 bg-primary text-white rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                                                <Icon className="text-xl" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg text-primary">{info.title}</h3>
                                                <p className="text-base-content/70">{info.value}</p>
                                            </div>
                                        </motion.div>
                                    </Link>
                                );
                            })}
                        </motion.div>

                        <div className="mt-6">
                            <h3 className="text-xl font-bold text-primary grotesk mb-4">Follow Me</h3>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <Link to={social.url} key={index} target="_blank" rel="noopener noreferrer">
                                            <motion.div
                                                key={index}
                                                className="p-3 bg-base-200 rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Icon className="text-xl" />
                                            </motion.div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        variants={fadeInRight}
                        initial="hidden"
                        animate="visible" // ✅ changed from whileInView
                    >
                        <div className="bg-base-200 p-8 rounded-2xl shadow-xl">
                            <h2 className="text-3xl font-bold text-primary grotesk mb-6">Send Me a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {['name', 'email', 'subject'].map((field, i) => (
                                    <div className="form-control" key={field}>
                                        <label className="label">
                                            <span className="label-text font-medium">{field[0].toUpperCase() + field.slice(1)}</span>
                                        </label>
                                        <input
                                            type={field === 'email' ? 'email' : 'text'}
                                            name={field}
                                            value={formData[field]}
                                            onChange={handleInputChange}
                                            placeholder={`Enter your ${field}`}
                                            className="input input-bordered w-full bg-base-100"
                                            required
                                        />
                                    </div>
                                ))}

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium">Message</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Your message here..."
                                        className="textarea textarea-bordered h-32 w-full bg-base-100 resize-none"
                                        required
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="lg"
                                    disabled={isSubmitting}
                                    icon={isSubmitting ? FaCheckCircle : FaPaperPlane}
                                    iconPosition="right"
                                    className="w-full"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};

export default Contact;