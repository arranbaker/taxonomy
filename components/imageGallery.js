import { motion } from "framer-motion";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import GallerySlides from "./gallerySlides";

const ImageGallery = () => {

    const [galleryDate, setGalleryDate] = useState('2019')
    const archiveScroll = useRef()

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger)



        let sections = gsap.utils.toArray('.gallery-slide')

        ScrollTrigger.matchMedia({
            "(min-width: 850px)": function () {
                let scrollTrig1 = gsap.to(sections, {
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

                return () => {
                    scrollTrig1.kill()
                }
            }
        })


    }, [])

    useEffect(() => {
        const onScroll = () => {

            let scrollPercentage = (window.pageYOffset / document.body.offsetHeight) * 100

            if (scrollPercentage < 44) {
                setGalleryDate(2019)
            } if (scrollPercentage > 44) {
                setGalleryDate(2018)
            } if (scrollPercentage > 52) {
                setGalleryDate(2017)
            }
        }

        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    return (
        <motion.div className="archive-scroll-container" ref={archiveScroll} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
            <div className="gallery-line"></div>
            <div className="gallery-date"><motion.h3 initial={{ rotateX: 90 }} animate={{ rotateX: 0 }} whileInView={{ rotateX: 0 }} transition={{ duration: 0.8 }}>{galleryDate}</motion.h3></div>
            <div className="gallery-container">
                <GallerySlides />
            </div>
        </motion.div>
    );
}

export default ImageGallery;