import { AnimatePresence, motion } from 'framer-motion';

import { slideAnimation } from '../../config/motion';
import { SizeSubTabs } from '../../config/constants';
import SizeSubTab from '../subtabs/SizeSubTab';

const SizesTab = () => {
    return (
        <AnimatePresence>
            <motion.div
                key="custom"
                className="absolute left-full ml-1 shadow-xl"
                {...slideAnimation('left')}
            >
                <div className='bg-[#ECA268]  rounded-lg flex gap-6 px-6 py-3'>
                    {
                        SizeSubTabs.map((tab) => (
                            <div key={tab.name} className='flex items-center justify-center'>
                                <SizeSubTab key={tab.name} tab={tab} handleClick={() => { }} />
                            </div>
                        ))
                    }
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default SizesTab