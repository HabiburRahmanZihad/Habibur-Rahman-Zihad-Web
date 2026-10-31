/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

// Personal/travel photo gallery. Each entry has real, descriptive alt text
// (not keyword-stuffed) based on what the photo actually shows — reviewed
// during the 2026-08-11 SEO audit since these previously had alt="".
const images = [
    { src: "https://i.ibb.co/N2h1TcY1/a-1.jpg", alt: "Habibur Rahman Zihad standing on the balcony of a colonial-era heritage building" },
    { src: "https://i.ibb.co/2YHs7Bgz/a-1.jpg", alt: "Habibur Rahman Zihad on a personal trip, from his travel photo collection" },
    { src: "https://i.ibb.co/zWLJ587M/a-3.jpg", alt: "Habibur Rahman Zihad outdoors in low evening light, from his travel photo collection" },
    { src: "https://i.ibb.co/4g3dMWhf/a-3.jpg", alt: "Habibur Rahman Zihad standing under tall trees with the evening sky behind him" },
    { src: "https://i.ibb.co/ZRhMVN8W/a-4.jpg", alt: "Habibur Rahman Zihad looking out at the sea on a beach visit, wearing a jersey printed with 'ZIHAD'" },
    { src: "https://i.ibb.co/kgNMNT1F/a-4.jpg", alt: "Habibur Rahman Zihad in a dimly lit outdoor setting, from his travel photo collection" },
    { src: "https://i.ibb.co/Csv3BbF1/a-6.jpg", alt: "Habibur Rahman Zihad with Computer & Communication Engineering classmates at International Islamic University Chittagong" },
    { src: "https://i.ibb.co/jmC1XNX/a-7.jpg", alt: "Green tree canopy photographed on one of Habibur Rahman Zihad's outdoor trips" },
    { src: "https://i.ibb.co/wNSppQpk/a-8.jpg", alt: "Trees and open sky photographed on one of Habibur Rahman Zihad's outdoor trips" },
    { src: "https://i.ibb.co/spTb5VcQ/a-9.jpg", alt: "Black-and-white portrait of Habibur Rahman Zihad outdoors near a multi-storey building" },
    { src: "https://i.ibb.co/fzJdxJhw/1725203067884.jpg", alt: "Habibur Rahman Zihad wearing his International Islamic University Chittagong ID lanyard" },
    { src: "https://i.ibb.co/qFJpwtDV/IMG-0089.jpg", alt: "A moss-covered rock cliff face photographed by Habibur Rahman Zihad" },
    { src: "https://i.ibb.co/C337d5sM/1745678827444.jpg", alt: "Green hills photographed during one of Habibur Rahman Zihad's trips" },
    { src: "https://i.ibb.co/JjK3Vpp9/1745667966525.jpg", alt: "Habibur Rahman Zihad wearing sunglasses in front of a green hillside" },
    { src: "https://i.ibb.co/Z634LS5S/1745670997365.jpg", alt: "Habibur Rahman Zihad sitting in a café with framed food photography on the wall behind him" },
    { src: "https://i.ibb.co/CpfRrgzw/IMG-20250331-WA0105-1.jpg", alt: "Habibur Rahman Zihad with friends posing for a group photo at a restaurant table" },
    { src: "https://i.ibb.co/s9q7t4zT/1718111231589.jpg", alt: "Habibur Rahman Zihad and university friends posing for a group selfie at a restaurant" },
    { src: "https://i.ibb.co/LdwSFSKM/IMG-20240312-WA0001-01.jpg", alt: "Habibur Rahman Zihad on the International Islamic University Chittagong campus" },
];

const ImageGrid = () => {
    return (
        <div className="px-4 py-10 md:py-16 max-w-7xl mx-auto">
            <div className="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4 relative z-0">
                {images.map((image, index) => (
                    <ImageItem key={index} src={image.src} alt={image.alt} />
                ))}
            </div>
        </div>
    );
};

const ImageItem = ({ src, alt }) => {
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
                    alt={alt}
                    loading="lazy"
                    className="w-full h-full object-cover brightness-90 hover:brightness-100 transition duration-500 ease-in-out rounded-xl"
                />
            </motion.div>
        </div>
    );
};

export default ImageGrid;