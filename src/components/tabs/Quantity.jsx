import { AnimatePresence, motion } from 'framer-motion';

import { slideAnimation } from '../../config/motion';
import { QuantitySubTabs } from '../../config/constants';
import QuantitySubTab from '../subtabs/QuantitySubTab';
const QuantityTab = () => {
    return (
        <AnimatePresence>
            <motion.div
                key="custom"
                className="absolute left-full ml-1 top-40 shadow-xl"
                {...slideAnimation('left')}
            >
                <div className='bg-[#ECA268]  rounded-lg flex gap-6 px-6 py-3'>
                    {
                        QuantitySubTabs.map((tab) => (
                            <div key={tab.name} className='flex items-center justify-center'>
                                <QuantitySubTab key={tab.name} tab={tab} handleClick={() => { }} />
                            </div>
                        ))
                    }
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default QuantityTab