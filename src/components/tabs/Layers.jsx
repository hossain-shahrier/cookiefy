import { AnimatePresence, motion } from 'framer-motion';

import { slideAnimation } from '../../config/motion';
import { LayerSubTabs } from '../../config/constants';
import LayersSubTab from '../subtabs/LayersSubTab';

const LayersTab = () => {
  return (
    <AnimatePresence>
      <motion.div
        key="custom"
        className="absolute left-full ml-1 top-20 shadow-xl"
        {...slideAnimation('left')}
      >
        <div className='bg-[#ECA268]  rounded-lg flex gap-6 px-6 py-3'>
          {
            LayerSubTabs.map((tab) => (
              <div key={tab.name} className='flex items-center justify-center'>
                <LayersSubTab key={tab.name} tab={tab} handleClick={() => { }} />
              </div>
            ))
          }
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default LayersTab