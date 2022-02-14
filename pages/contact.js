import { motion } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";

const Contact = () => {

    const router = useRouter()

    return (
        <>
            <Head>
                <title>Contact | Taxonomy</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <motion.div className="contact-container" exit={{ opacity: 0 }} initial={{ opacity: 0, x: 1200 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
                <div className="contact-header">
                    <div className="close-button-container" onClick={() => router.back()}><p>X</p></div>
                </div>
                <div className="contact-form-container">
                    <h3>Contact.</h3>
                    <form className="contact-form">
                        <label htmlFor="name">Name</label>
                        <input type='text' id='name' />
                        <label htmlFor="email">Email</label>
                        <input type='email' id='email' />
                        <label htmlFor="meassage">Message</label>
                        <textarea id="message" />
                        <button type="submit">Send</button>
                    </form>
                </div>
            </motion.div>
        </>
    );
}

export default Contact;