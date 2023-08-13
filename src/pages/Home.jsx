import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio';
import { slideAnimation } from '../config/motion'

// state
import state from '../store';
import { Topbar } from '../components';
import HeroSection from '../sections/HeroSection';

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {
        snap.intro && (
          <motion.section>
            <motion.header {...slideAnimation('down')}>
              <Topbar />
            </motion.header>
            <HeroSection />

          </motion.section>
        )
      }
    </AnimatePresence>
  )
}

export default Home