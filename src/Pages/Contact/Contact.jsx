import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaLinkedin,
    FaGithub,
    FaTwitter,
    FaPaperPlane,
    FaCheckCircle
} from 'react-icons/fa';
import Button from '../../Components/Buttons/Button';
import Swal from 'sweetalert2';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const contactInfo = [
        {
            icon: FaEnvelope,
            title: 'Email',
            value: 'habibur.rahman@example.com',
            link: 'mailto:habibur.rahman@example.com'
        },
        {
            icon: FaPhone,
            title: 'Phone',
            value: '+880 123 456 789',
            link: 'tel:+880123456789'
        },
        {
            icon: FaMapMarkerAlt,
            title: 'Location',
            value: 'Dhaka, Bangladesh',
            link: 'https://maps.google.com/?q=Dhaka,Bangladesh'
        }
    ];

    const socialLinks = [
        {
            icon: FaLinkedin,
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/habibur-rahman',
            color: 'text-blue-600'
        },
        {
            icon: FaGithub,
            name: 'GitHub',
            url: 'https://github.com/habibur-rahman',
            color: 'text-gray-800 dark:text-white'
        },
        {
            icon: FaTwitter,
            name: 'Twitter',
            url: 'https://twitter.com/habibur_rahman',
            color: 'text-blue-400'
        }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);

            // Show success alert
            Swal.fire({
                title: 'Message Sent!',
                text: 'Thank you for reaching out. I\'ll get back to you soon!',
                icon: 'success',
                confirmButtonText: 'Great!',
                confirmButtonColor: '#DAA520'
            });

            // Reset form
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-base-100">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-base-100 to-base-200">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-primary grotesk mb-6">
                            Get In Touch
                        </h1>
                        <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
                            I'm always open to discussing new opportunities, creative projects,
                            or potential collaborations. Let's create something amazing together!
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-20 bg-base-100">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-primary grotesk mb-8">
                                Let's Start a Conversation
                            </h2>
                            <p className="text-lg text-base-content/70 mb-8 leading-relaxed">
                                Whether you have a project in mind, want to collaborate, or just
                                want to say hello, I'd love to hear from you. Choose the method
                                that works best for you.
                            </p>

                            {/* Contact Info Cards */}
                            <div className="space-y-6 mb-10">
                                {contactInfo.map((info, index) => {
                                    const IconComponent = info.icon;
                                    return (
                                        <motion.a
                                            key={index}
                                            href={info.link}
                                            target={info.link.startsWith('http') ? '_blank' : undefined}
                                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1, duration: 0.6 }}
                                            viewport={{ once: true }}
                                            className="flex items-center p-6 bg-base-200 rounded-xl hover:bg-base-300 transition-colors duration-300 group"
                                        >
                                            <div className="p-4 bg-primary text-white rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                                                <IconComponent className="text-xl" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg text-primary">
                                                    {info.title}
                                                </h3>
                                                <p className="text-base-content/70">
                                                    {info.value}
                                                </p>
                                            </div>
                                        </motion.a>
                                    );
                                })}
                            </div>

                            {/* Social Links */}
                            <div>
                                <h3 className="text-xl font-bold text-primary grotesk mb-4">
                                    Follow Me
                                </h3>
                                <div className="flex space-x-4">
                                    {socialLinks.map((social, index) => {
                                        const IconComponent = social.icon;
                                        return (
                                            <motion.a
                                                key={index}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`p-3 bg-base-200 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 ${social.color}`}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                aria-label={social.name}
                                            >
                                                <IconComponent className="text-xl" />
                                            </motion.a>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-base-200 p-8 rounded-2xl shadow-xl">
                                <h2 className="text-3xl font-bold text-primary grotesk mb-6">
                                    Send Me a Message
                                </h2>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name Input */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-medium">Name</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="Your full name"
                                            className="input input-bordered w-full bg-base-100"
                                            required
                                        />
                                    </div>

                                    {/* Email Input */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-medium">Email</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="your.email@example.com"
                                            className="input input-bordered w-full bg-base-100"
                                            required
                                        />
                                    </div>

                                    {/* Subject Input */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-medium">Subject</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            placeholder="What's this about?"
                                            className="input input-bordered w-full bg-base-100"
                                            required
                                        />
                                    </div>

                                    {/* Message Textarea */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-medium">Message</span>
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder="Tell me about your project or idea..."
                                            className="textarea textarea-bordered h-32 w-full bg-base-100 resize-none"
                                            required
                                        />
                                    </div>

                                    {/* Submit Button */}
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
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-base-200">
                <div className="max-w-4xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-primary grotesk mb-4">
                            Quick Answers
                        </h2>
                        <p className="text-xl text-base-content/70">
                            Here are some frequently asked questions.
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        {[
                            {
                                question: "What's your typical response time?",
                                answer: "I usually respond to emails within 24 hours during weekdays."
                            },
                            {
                                question: "Do you work on weekends?",
                                answer: "I'm available for urgent matters, but prefer to plan non-urgent work during weekdays."
                            },
                            {
                                question: "What type of projects do you take on?",
                                answer: "I work on web applications, mobile apps, UI/UX design, and consulting projects."
                            },
                            {
                                question: "Do you offer maintenance services?",
                                answer: "Yes, I provide ongoing maintenance and support for projects I've developed."
                            }
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                                className="collapse collapse-plus bg-base-100"
                            >
                                <input type="radio" name="faq-accordion" />
                                <div className="collapse-title text-lg font-medium text-primary">
                                    {faq.question}
                                </div>
                                <div className="collapse-content">
                                    <p className="text-base-content/70">{faq.answer}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
