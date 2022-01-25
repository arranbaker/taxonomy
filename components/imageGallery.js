import { motion } from "framer-motion";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from 'react';
import GallerySlides from "./gallerySlides";

gsap.registerPlugin(ScrollTrigger)


const ImageGallery = () => {

    useEffect(() => {

        let sections = gsap.utils.toArray('.gallery-slide')

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 0.5),
            ease: 'none',
            scrollTrigger: {
                trigger: '.archive-container',
                start: 'top top',
                pin: true,
                scrub: 0.5,
                end: () => '+=' + document.querySelector('.gallery-container').offsetWidth
            }
        })
        ScrollTrigger.refresh();
    }, [])

    return (
        <motion.div className="archive-scroll-container" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
            <div className="gallery-line"></div>
            <div className="gallery-container">
                <GallerySlides />
            </div>
        </motion.div>
    );
}

export default ImageGallery;