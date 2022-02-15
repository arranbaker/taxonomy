import { motion } from 'framer-motion';
import ImageGallery from '../components/imageGallery';
import Navbar from '../components/navbar';
import { useEffect, useState } from 'react';
import Head from 'next/head';

export default function Home() {

  const [navSroll, setNavScroll] = useState(true)

  useEffect(() => {

    const handleNav = () => {
      if (window.pageYOffset > 0) {
        setNavScroll(false)
      } else {
        setNavScroll(true)
      }
    }

    window.removeEventListener('scroll', handleNav);
    window.addEventListener('scroll', handleNav, { passive: true });
    return () => window.removeEventListener('scroll', handleNav);
  }, [])

  const handleScrollTo = (location) => {
    document.querySelector(location).scrollIntoView()
  }

  return (
    <>
      <Head>
        <title>Taxonomy</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {navSroll ? <Navbar /> : null}
      <motion.div className='landing-container' id='landing' exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
        <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} >
          <a><motion.p className='landing-link' >Taxonomy.</motion.p></a>
        </motion.ul>
        <motion.p className='landing-text' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 0.5 }} exit={{ opacity: 0 }}>An interactive photography archive, capturing the world as it is seen.</motion.p>
        <motion.img src='img/landing1.jpg' className='landing-circle-1' initial={{ x: -400 }} animate={{ x: 0 }} transition={{ duration: 0.7 }} />
        <motion.img src='img/landing2.jpg' className='landing-circle-2' initial={{ x: -400 }} animate={{ x: 0 }} transition={{ duration: 0.7, delay: 0.1 }} />
        <motion.p className='landing-scroll-message' initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>SCROLL DOWN</motion.p>
      </motion.div>
      <motion.div className='details-container'>
        <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 2 }}>Looking at things, studying the land, the world being learnt.</motion.h3>
        <div className='details-text-container'>
          <p>Taxonomy is an interactive photography archive.</p>
          <p className='details-text-2'>From our eyes to yours.</p>
        </div>
        <motion.h2 className='archive-title'>archive .</motion.h2>
      </motion.div>
      <div className='archive-content'>
        <div className="gallery-sqaure"></div>
        <motion.div className="archive-container" id='archive' >
          <ImageGallery />
        </motion.div>
      </div>
      <motion.div className='credits-container'>
        <motion.h2 className='credits-title' id='credits' exit={{ opacity: 0 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>credits.</motion.h2 >
        <div className='credits-scroll-container'>
          <h3>Featured Photographers.</h3>
          <ul className='credits-list'>
            <li><p>Arran Baker</p></li>
            <li><p>Daisy Smith</p></li>
          </ul>
          <h3 className='credits-made-by'>Made By.</h3>
          <ul className='credits-list'>
            <li><p>© Taxonomy</p></li>
          </ul>
          <div className="up-button-container" onClick={() => handleScrollTo('#landing')}><p>back to top</p></div>
        </div>
      </motion.div>
    </>
  )
}
