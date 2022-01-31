import { motion } from "framer-motion";

const Loading = () => {

    const load = {
        initial: {
            opacity: 1
        },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 1,
            }
        }
    }

    const loadText = {
        initial: {
            opacity: 0,
            y: 50,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
            }
        }
    }


    return (
        <motion.div className="loading-container" initial='initial' animate='animate' variants={load}>
            <motion.h1 variants={loadText}>Taxonomy.</motion.h1>
            <div>
                <motion.h2 variants={loadText}>Image </motion.h2>
                <motion.h2 variants={loadText}>Archive</motion.h2>
            </div>
        </motion.div>
    );
}

export default Loading;