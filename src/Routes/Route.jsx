import { createBrowserRouter } from 'react-router';
import RootLayout from '../Layout/RootLayout';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Projects from '../Pages/Projects/Projects';
import Contact from '../Pages/Contact/Contact';
import Error from '../Pages/Error/Error';
import Blogs from '../Pages/Blogs/Blogs';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        children: [
            { index: true, element: <Home></Home> },
            { path: '/about', element: <About></About> },
            { path: '/projects', element: <Projects></Projects> },
            { path: '/contact', element: <Contact></Contact> },
            { path: '/blogs', element: <Blogs></Blogs> },
            { path: '*', element: <Error></Error> },
        ]
    },
]);