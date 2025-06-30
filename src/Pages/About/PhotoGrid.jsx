import { motion } from "framer-motion";

const images = [
    "https://i.ibb.co/N2h1TcY1/a-1.jpg",
    "https://i.ibb.co/GD2CG4p/a-1.jpg",
    "https://i.ibb.co/2YHs7Bgz/a-1.jpg",
    "https://i.ibb.co/zWLJ587M/a-3.jpg",
    "https://i.ibb.co/4g3dMWhf/a-3.jpg",
    "https://i.ibb.co/ZRhMVN8W/a-4.jpg",
    "https://i.ibb.co/kgNMNT1F/a-4.jpg",
    "https://i.ibb.co/QvGG0cTF/a-5.jpg",
    "https://i.ibb.co/Csv3BbF1/a-6.jpg",
    "https://i.ibb.co/jmC1XNX/a-7.jpg",
    "https://i.ibb.co/wNSppQpk/a-8.jpg",
    "https://i.ibb.co/spTb5VcQ/a-9.jpg",
    "https://i.ibb.co/fzJdxJhw/1725203067884.jpg",
    "https://i.ibb.co/qFJpwtDV/IMG-0089.jpg"
];

const ImageGrid = () => {
    return (
        <div className="px-4 py-10 md:py-0 max-w-7xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] gap-4">
                {images.slice(0, 8).map((src, i) => (
                    <ImageItem key={i} src={src} />
                ))}

                {/* Center Image (Featured) */}
                <motion.div
                    className="col-span-2 row-span-2 overflow-hidden rounded-xl shadow-2xl relative group"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                >
                    <img
                        src={images[8]}
                        alt="center"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition duration-300">
                        Featured Shot
                    </div>
                </motion.div>

                {
                    images.slice(9).map((src, i) => (
                        <ImageItem key={i + 9} src={src} />
                    ))
                }
            </div >
        </div >
    );
};

const ImageItem = ({ src }) => (
    <motion.div
        className="overflow-hidden rounded-xl   shadow-md relative group"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
    >
        <img
            src={src}
            alt=""
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition duration-300" />

    </motion.div>
);

export default ImageGrid;
