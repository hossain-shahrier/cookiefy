/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei'

import CameraRig from './CameraRig';
import Backdrop from './Backdrop'
import Cookie from './Cookie';
const CanvasModel = () => {
    return (
        <Canvas camera={{ position: [0, 0, 0], fov: 30 }} gl={{ preserveDrawingBuffer: true }}
            className='w-full max-w-full h-full transition-all ease-in'>
            <ambientLight intensity={0.5} />
            <Environment preset="city" />
            <CameraRig>
                <Backdrop />
                <Center>
                    <Cookie />
                </Center>

            </CameraRig>
        </Canvas>
    )
}

export default CanvasModel