import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <motion.nav exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
            <Link href='/'><h1>Taxonomy.</h1></Link>
            <ul>
                <Link href='/about'><li><a>about</a></li></Link>
                <Link href='/contact'><li><a>contact</a></li></Link>
            </ul>
        </motion.nav>
    );
}

export default Navbar;