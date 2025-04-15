// pages/_app.js
import { AnimatePresence } from 'framer-motion';
import '../styles/globals.css';

export default function App({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Component key={router.asPath} {...pageProps} />
    </AnimatePresence>
  );
}