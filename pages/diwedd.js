import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";
import Navbar from "../components/navbar";

const Diwedd = () => {
    return (
        <>
            <Head>
                <title>Diwedd | Archive | Taxonomy</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar />
            <motion.div className="album-page-container" initial={{ y: 800 }} animate={{ y: 0 }} transition={{ duration: 2 }} style={{ background: 'pink' }}>
                <div className="album-header">
                    <Link href='/#archive'><div className="close-button-container"><p>X</p></div></Link>
                </div>
                <h3 className="album-title">On the Diwedd.</h3>
                <div className="album-info">
                    <p>2016 - 2017</p>
                    <p>by Arran Baker</p>
                </div>
                <div className="album-content-container">
                    <img src='img/diwedd/1.jpg' className="diwedd-img-1 album-image" />
                    <img src='img/diwedd/2.jpg' className="diwedd-img-2 album-image" />
                    <img src='img/diwedd/3.jpg' className="diwedd-img-3 album-image" />
                    <img src='img/diwedd/4.jpg' className="diwedd-img-4 album-image" />
                    <img src='img/diwedd/5.jpg' className="diwedd-img-5 album-image" />
                    <img src='img/diwedd/6.jpg' className="diwedd-img-6 album-image" />
                    <img src='img/diwedd/7.jpg' className="diwedd-img-7 album-image" />
                    <img src='img/diwedd/8.jpg' className="diwedd-img-8 album-image" />
                </div>
            </motion.div >
        </>
    );
}

export default Diwedd;