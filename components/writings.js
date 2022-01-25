import { motion } from "framer-motion";

const Writings = () => {
    return (
        <div className="writings-scroll-container">
            <motion.h3 className="writings-title" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>Writings.</motion.h3>
        </div>
    );
}

export default Writings;