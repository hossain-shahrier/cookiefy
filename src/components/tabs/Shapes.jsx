import { AnimatePresence, motion } from 'framer-motion';

import { slideAnimation } from '../../config/motion';
import { SubTabs } from '../../config/constants';
import ShapeSubTab from '../subtabs/ShapeSubTab';
const ShapesTab = () => {
    return (
        <AnimatePresence>
            <motion.div
                key="custom"
                className="absolute left-full ml-1 top-2 shadow-xl"
                {...slideAnimation('left')}
            >
                <div className='bg-[#ECA268]  rounded-lg flex gap-6 px-6 py-3'>
                    {
                        SubTabs.map((tab) => (
                            <div key={tab.name} className='flex items-center justify-center'>
                                <ShapeSubTab key={tab.name} tab={tab} handleClick={() => { }} />
                            </div>
                        ))
                    }
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default ShapesTab