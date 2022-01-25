import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";
import Navbar from "../components/navbar";

const Lisboa = () => {

    return (
        <>
            <Head>
                <title>Lisboa | Archive | Taxonomy</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar />
            <motion.div className="album-page-container" initial={{ y: 800 }} animate={{ y: 0 }} transition={{ duration: 2 }} exit={{ x: -300, opacity: 0 }}>
                <div className="album-header">
                    <Link href='/#archive'><div className="close-button-container"><p>X</p></div></Link>
                </div>
                <h3 className="album-title">desculpa, Lisboa</h3>
                <div className="album-info">
                    <p>2018</p>
                    <p>by Arran Baker</p>
                </div>
                <div className="album-content-container">
                    <img src='img/lisboa/1.jpg' className="lisboa-img-1 album-image" />
                    <img src='img/lisboa/2.jpg' className="lisboa-img-2 album-image" />
                    <img src='img/lisboa/3.jpg' className="lisboa-img-3 album-image" />
                    <img src='img/lisboa/4.jpg' className="lisboa-img-4 album-image" />
                    <img src='img/lisboa/5.jpg' className="lisboa-img-5 album-image" />
                    <img src='img/lisboa/6.jpg' className="lisboa-img-6 album-image" />
                    <img src='img/lisboa/7.jpg' className="lisboa-img-7 album-image" />
                    <img src='img/lisboa/8.jpg' className="lisboa-img-8 album-image" />
                </div>
            </motion.div >
        </>
    );
}

export default Lisboa;