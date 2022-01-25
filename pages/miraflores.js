import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";
import Navbar from "../components/navbar";

const Miraflores = () => {

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
                    <img src='img/miraflores/1.jpg' className="miraflores-img-1  album-image" />
                    <p>mira-flores captures the rich and etheral landscapes of central and south america.</p>
                </div>
                <div className="miraflores-scroll-container">
                    <img src='/img/miraflores/2.jpg' className="miraflores-img-2 miraflores-image album-image" />
                    <img src='img/miraflores/3.jpg' className="miraflores-img-3 miraflores-image album-image" />
                    <img src='img/miraflores/4.jpg' className="miraflores-img-4 miraflores-image album-image" />
                    <img src='img/miraflores/5.jpg' className="miraflores-img-5 miraflores-image album-image" />
                    <img src='img/miraflores/6.jpg' className="miraflores-img-6 miraflores-image album-image" />
                    <ul>
                        <li><p>. costa rica</p></li>
                        <li><p>. nicaragua</p></li>
                        <li><p>. colombia</p></li>
                        <li><p>. ecuador</p></li>
                        <li><p>. peru</p></li>
                    </ul>
                    <div className="ecuador-video-container">
                        <video autoPlay muted loop>
                            <source src="/vid/ecuador.mp4" type="video/mp4" />
                        </video>
                        <h3 className="text-layer">Ecuador</h3>
                    </div>
                </div>
            </motion.div >
        </>
    );
}

export default Miraflores;