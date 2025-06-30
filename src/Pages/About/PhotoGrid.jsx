import { motion } from "framer-motion";

// List of image URLs
const images = [
    "https://i.ibb.co/N2h1TcY1/a-1.jpg",
    "https://i.ibb.co/2YHs7Bgz/a-1.jpg",
    "https://i.ibb.co/zWLJ587M/a-3.jpg",
    "https://i.ibb.co/4g3dMWhf/a-3.jpg",
    "https://i.ibb.co/ZRhMVN8W/a-4.jpg",
    "https://i.ibb.co/kgNMNT1F/a-4.jpg",
    "https://i.ibb.co/Csv3BbF1/a-6.jpg",
    "https://i.ibb.co/jmC1XNX/a-7.jpg",
    "https://i.ibb.co/wNSppQpk/a-8.jpg",
    "https://i.ibb.co/spTb5VcQ/a-9.jpg",
    "https://i.ibb.co/fzJdxJhw/1725203067884.jpg",
    "https://i.ibb.co/qFJpwtDV/IMG-0089.jpg",
    "https://i.ibb.co/C337d5sM/1745678827444.jpg",
    "https://i.ibb.co/JjK3Vpp9/1745667966525.jpg",
    "https://i.ibb.co/Z634LS5S/1745670997365.jpg",
    "https://i.ibb.co/CpfRrgzw/IMG-20250331-WA0105-1.jpg",
    "https://i.ibb.co/s9q7t4zT/1718111231589.jpg",
    "https://i.ibb.co/LdwSFSKM/IMG-20240312-WA0001-01.jpg"
];

const ImageGrid = () => {
    return (
        <div className="px-4 py-10 md:py-16 max-w-7xl mx-auto">
            <div className="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4 relative z-0">
                {images.map((src, index) => (
                    <ImageItem key={index} src={src} />
                ))}
            </div>
        </div>
    );
};

const ImageItem = ({ src }) => {
    // Check if the user is on a touch device (mobile/tablet)
    const isTouchDevice = typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;

    return (
        <div className="relative overflow-visible">
            <motion.div
                className={`rounded-xl shadow-md relative z-10 group ${!isTouchDevice ? "hover:cursor-pointer" : ""
                    }`}
                // Disable hover animation on mobile
                whileHover={!isTouchDevice ? { scale: 1.9, zIndex: 50 } : {}}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{ transformOrigin: "center top" }}
            >
                <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover brightness-90 hover:brightness-100 transition duration-500 ease-in-out rounded-xl"
                />
            </motion.div>
        </div>
    );
};

export default ImageGrid;