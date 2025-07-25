import { useEffect } from 'react';
import { Link } from 'react-router';

const dummyBlogs = [
    {
        id: 1,
        title: 'What is React and Why Use It?',
        date: 'July 25, 2025',
        description: 'React is a JavaScript library for building user interfaces...',
    },
    {
        id: 2,
        title: 'Understanding useEffect in React',
        date: 'July 20, 2025',
        description: 'useEffect is one of the most commonly used React hooks...',
    },
];



const Blogs = () => {
    useEffect(() => {
        document.title = 'Blogs | Habibur Rahman Zihad';
    }, []);



    return (
        <section className="min-h-screen p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            <h1 className="text-3xl font-bold mb-6">📚 Blogs</h1>

            <div className="grid md:grid-cols-2 gap-6">
                {dummyBlogs.map((blog) => (
                    <div
                        key={blog.id}
                        className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-xl transition"
                    >
                        <h2 className="text-xl font-semibold">{blog.title}</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{blog.date}</p>
                        <p className="mt-2">{blog.description}</p>
                        <Link to={`/blogs/${blog.id}`} className="text-blue-500 mt-3 inline-block">
                            Read More →
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blogs;