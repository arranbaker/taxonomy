import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";
import Navbar from "../components/navbar";
import { useEffect } from "react";

const Miraflores = () => {

    useEffect(() => {

    }, [])

    return (
        <>
            <Head>
                <title>Miraflores | Archive | Taxonomy</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar />
            <motion.div className="album-page-container" initial={{ y: 800 }} animate={{ y: 0 }} transition={{ duration: 2 }}>
                <div className="album-header">
                    <Link href='/#archive'><div className="close-button-container"><p>X</p></div></Link>
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
                <div className="miraflores-scroll-container ">
                    <div className="costa-rica-container miraflores-album-container">
                        <h2 className="miraflores-album-title">Costa Rica</h2>
                        <img src='img/miraflores/costaRica/costa-rica-1.jpg' className="costa-rica-img miraflores-image album-image" />
                        <img src='img/miraflores/costaRica/costa-rica-2.jpg' className="costa-rica-img miraflores-image album-image" />
                        <img src='img/miraflores/costaRica/costa-rica-3.jpg' className="costa-rica-img miraflores-image album-image" />
                        <img src='img/miraflores/costaRica/costa-rica-4.jpg' className="costa-rica-img miraflores-image album-image" />
                        <img src='img/miraflores/costaRica/costa-rica-5.jpg' className="costa-rica-img miraflores-image album-image" />
                        <img src='img/miraflores/costaRica/costa-rica-6.jpg' className="costa-rica-img miraflores-image album-image" />
                        <img src='img/miraflores/costaRica/costa-rica-7.jpg' className="costa-rica-img miraflores-image album-image" />
                        <img src='img/miraflores/costaRica/costa-rica-8.jpg' className="costa-rica-img miraflores-image album-image" />
                    </div>
                    <div className="nicaragua-container miraflores-album-container">
                        <h2 className="miraflores-album-title">Nicaragua</h2>
                    </div>
                    <div className="colombia-container miraflores-album-container">
                        <h2 className="miraflores-album-title">Colombia</h2>
                    </div>
                    <div className="ecuador-container miraflores-album-container">
                        <div className="ecuador-video-container">
                            <video autoPlay muted loop>
                                <source src="/vid/ecuador.mp4" type="video/mp4" />
                            </video>
                            <h3 className="text-layer">Ecuador</h3>
                        </div>
                        <img src='/img/miraflores/2.jpg' className="miraflores-img-2 miraflores-image album-image" />
                        <img src='img/miraflores/3.jpg' className="miraflores-img-3 miraflores-image album-image" />
                    </div>
                    <div className="peru-container miraflores-album-container">
                        <h2 className="miraflores-album-title">Peru</h2>
                        <img src='img/miraflores/4.jpg' className="miraflores-img-4 miraflores-image album-image" />
                    </div>
                </div>
            </motion.div >
        </>
    );
}

export default Miraflores;