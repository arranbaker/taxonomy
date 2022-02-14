import { motion } from "framer-motion";
import Head from "next/head";
import Navbar from "../components/navbar";
import { useEffect } from "react";
import { useRouter } from "next/router";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { costaRicaImages } from "../gallerySlideData";

const Miraflores = () => {

    const router = useRouter()

    return (
        <>
            <Head>
                <title>Miraflores | Archive | Taxonomy</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar />
            <motion.div className="album-page-container" initial={{ y: 800 }} animate={{ y: 0 }} transition={{ duration: 2 }}>
                <div className="album-header">
                    <div className="close-button-container" onClick={() => router.back()}><p>X</p></div>
                </div>
                <h3 className="album-title">mira-flores</h3>
                <div className="album-info">
                    <p>2018 - 2019</p>
                    <p>by Arran Baker</p>
                </div>
                <div className="album-content-container">
                    <img src='img/miraflores/miraflores-1.jpg' className="miraflores-img-1  album-image" />
                    <p>mira-flores captures the rich and etheral landscapes of central and south america.</p>
                </div>
                <div className="costa-rica-container">
                    <h2 className="miraflores-album-title costa-rica-album-title">Costa Rica</h2>
                    <div className="costa-rica-scroll">
                        {costaRicaImages.map((i, index) => {
                            return (
                                <div className="image-container" key={index}>
                                    <img src={i.url} className="costa-rica-img miraflores-image album-image" />
                                    <motion.div className="image-filter" whileInView={{ width: '0%' }} initial={{ width: '100%' }} transition={{ duration: 0.6, delay: 0.2 }} exit={{ opacity: 0 }} viewport={{ once: true }}></motion.div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="miraflores-scroll-container">
                    <div className="ecuador-container miraflores-album-container">
                        <div className="ecuador-video-container">
                            <video autoPlay muted loop>
                                <source src="/vid/ecuador.mp4" type="video/mp4" />
                            </video>
                            <h3 className="text-layer">Ecuador</h3>
                        </div>
                        <img src='/img/miraflores/ecuador/2.jpg' className="miraflores-img-2 miraflores-image album-image" />
                        <img src='img/miraflores/ecuador/3.jpg' className="miraflores-img-3 miraflores-image album-image" />

                    </div>
                </div>
                <p className="album-end-message">End.</p>
            </motion.div >
        </>
    );
}

export default Miraflores;