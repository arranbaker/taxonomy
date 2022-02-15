import { motion } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from 'react';

const Contact = () => {

    const router = useRouter()
    const confirmationScreenVisible = router.query?.success && router.query.success === "true"
    const [sent, setSent] = useState()

    const handleSubmit = (event) => {
        event.preventDefault()
        setSent(true)
    }

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
                    <form className="contact-form" onSubmit={(event) => handleSubmit(event)} data-netlify="true" method="POST" action="contact/?success=true">
                        <label htmlFor="name">Name</label>
                        <input type='text' id='name' />
                        <label htmlFor="email">Email</label>
                        <input type='email' id='email' />
                        <label htmlFor="meassage">Message</label>
                        <textarea id="message" />
                        <button type="submit">Send</button>
                    </form>
                </div>
                {sent && confirmationScreenVisible && < motion.p initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className='contact-sent-message'>Sent!<span><div><button className="sent-message-close" onClick={() => setSent(false)}>X</button></div></span></motion.p>}
                {sent && !confirmationScreenVisible && < motion.p initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className='contact-sent-message'>Oops try sending again!<span><button className="sent-message-close" onClick={() => setSent(false)}>X</button></span></motion.p>}
            </motion.div>
        </>
    );
}

export default Contact;