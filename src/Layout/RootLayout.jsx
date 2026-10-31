/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { motion } from 'framer-motion';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import ScrollToTop from '../Components/Hooks/ScrollToTop';
import CustomCursor from '../Components/Cursor/CustomCursor';
import ScrollNavigator from '../Components/ScrollNavigator/ScrollNavigator';
import { initSmoothScroll } from '../utils/smoothScroll';

const Root = () => {
    const location = useLocation();

    useEffect(() => initSmoothScroll(), []);

    return (
        <div>
            <CustomCursor />
            <ScrollToTop />

            <Navbar></Navbar>

            <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className='min-h-[calc(100vh-381px)] container mx-auto'
            >
                <Outlet />
            </motion.div>

            <Footer></Footer>

            <ScrollNavigator />

        </div>
    );
};

export default Root;