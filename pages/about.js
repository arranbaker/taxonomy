import { motion } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";

const About = () => {

    const router = useRouter()

    return (
        <>
            <Head>
                <title>About | Taxonomy</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <motion.div className="about-container" exit={{ opacity: 0 }} initial={{ opacity: 0, x: 1200 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
                <div className="about-header">
                    <div className="close-button-container"><p onClick={() => router.back()}>X</p></div>

                </div>
                <div className="about-text-container">
                    <h3>About.</h3>
                    <p>Taxonomy has been put together but select photographers, we are based in the UK.</p>
                </div>
            </motion.div>
        </>
    );
}

export default About;