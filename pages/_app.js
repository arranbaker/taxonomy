import '../styles/main.scss';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Loading from './loading';

function MyApp({ Component, pageProps }) {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500)
  })

  return (
    <AnimatePresence exitBeforeEnter>
      {loading ? <Loading /> : <Component {...pageProps} />}
    </AnimatePresence>
  )
}

export default MyApp
