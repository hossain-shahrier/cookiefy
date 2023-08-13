import { CustomButton } from '../components/CustomButton'
import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from '../config/motion'
import { motion } from 'framer-motion'
import state from '../store'

const HeroSection = () => {
    return (
        <motion.section className='home' {...slideAnimation('left')}>
            <motion.div {...headContainerAnimation} className='home-content'>
                <motion.div {...headTextAnimation}>
                    <h1 className='head-text'>
                        Make your own
                        <br className='xl:block hidden' />
                        unique taste
                    </h1>
                </motion.div>
                <motion.div
                    {...headContentAnimation}
                    className="flex flex-col gap-5"
                >
                    <p className="max-w-md font-normal text-gray-600 text-base">
                        Design your own cookie and packaging with in a minute
                    </p>
                    <CustomButton type='filled' icon="right" title='Customize' handleClick={() => state.intro = false} customStyles='w-fit px-6 py-5 text-sm rounded-full' />
                </motion.div>
            </motion.div>

        </motion.section>
    )
}

export default HeroSection