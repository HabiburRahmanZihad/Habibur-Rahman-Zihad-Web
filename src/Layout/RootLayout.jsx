import { Outlet } from 'react-router';
import { motion } from 'framer-motion';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import ScrollToTop from '../Components/Hooks/ScrollToTop';

const Root = () => {


    return (
        <div>
            <ScrollToTop />

            <Navbar></Navbar>

            <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className='min-h-[calc(100vh-381px)] container mx-auto'
            >
                <Outlet />
            </motion.div>

            <Footer></Footer>

        </div>
    );
};

export default Root;