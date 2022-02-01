import { motion } from 'framer-motion';
import ImageGallery from '../components/imageGallery';
import Navbar from '../components/navbar';
import { useEffect } from 'react';
import Head from 'next/head';

export default function Home() {

  useEffect(() => {
    const hashId = location.hash
    if (hashId) {
      const element = document.querySelector(hashId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
    }
    history.pushState("", document.title, window.location.pathname + window.location.search)
  }, [history])

  const handleScrollTo = (input) => {
    document.querySelector(input).scrollIntoView({

    })
  }

  return (
    <>
      <Head>
        <title>Taxonomy</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <motion.div className='landing-container' id='landing' exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
        <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} >
          <a><p className='landing-link' onClick={() => handleScrollTo('#archive')}>archive.</p></a>
          <a><p className='landing-link' onClick={() => handleScrollTo('#writing')}>credits.</p></a>
        </motion.ul>
        <motion.p className='landing-text' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 0.5 }}>Interactive photography archive, capturing the world as it is seen.</motion.p>
        <motion.img src='img/landing1.jpg' className='landing-circle-1' initial={{ x: -400 }} animate={{ x: 0 }} transition={{ duration: 0.7 }} />
        <motion.img src='img/landing2.jpg' className='landing-circle-2' initial={{ x: -400 }} animate={{ x: 0 }} transition={{ duration: 0.7, delay: 0.1 }} />
      </motion.div>
      <div className='home-container'>
        <motion.div className='details-container'>
          <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 2 }}>Looking at things, studying the land, the world being learnt.</motion.h3>
          <div className='details-text-container'>
            <p>Taxonomy is an interactive photography archive.</p>
            <p className='details-text-2'>From our eyes to yours.</p>
          </div>
          <motion.h2 className='archive-title'>archive.</motion.h2>
        </motion.div>
        <div className='archive-content'>
          <motion.div className="archive-container" id='archive' >
            <ImageGallery />
          </motion.div>
        </div>
        <motion.div className='writing-container' >
          <motion.h2 className='writing-title' id='writing' exit={{ opacity: 0 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>credits.</motion.h2 >
          <div className='credits-container'>
            <h3>Featured Photographers.</h3>
            <ul className='credits-list'>
              <li><p>Arran Baker</p></li>
              <li><p>Daisy Smith</p></li>
              <li><p>Billy Myles-Berkouwer</p></li>
            </ul>
            <h3 className='credits-made-by'>Made By.</h3>
            <ul className='credits-list'>
              <li><p>Ocove Studios</p></li>
            </ul>
            <div className="up-button-container" onClick={() => handleScrollTo('#landing')}><p>back to top</p></div>
          </div>
        </motion.div>
      </div>
    </>
  )
}
