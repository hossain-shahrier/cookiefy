/* eslint-disable react/prop-types */
import { useFrame } from "@react-three/fiber"
import { easing } from "maath"
import { useSnapshot } from "valtio"
import { useRef } from "react"
import state from "../store"
const CameraRig = ({ children }) => {
    const group = useRef()
    const snap = useSnapshot(state)
    useFrame((state, delta) => {
        const isBreakpoint = window.innerWidth < 1260;
        const isMobile = window.innerWidth < 600;

        // set initail position
        let targetPosition = [-0.7, -0.03, 2.5]
        if (snap.intro) {
            if (isBreakpoint) {
                targetPosition = [0, 0.05, 5]
            }
            if (isMobile) {
                targetPosition = [0, 0.1, 1]
            }
        }
        else {
            if (isMobile) {
                targetPosition = [0, 0, 2.5]
            }
            else targetPosition = [0, 0, 2.5]
        }
        // set model camera position
        easing.damp3(state.camera.position, targetPosition, 0.25, delta)
        // set the model rotation
        easing.dampE(
            group.current.rotation,
            [state.pointer.y + 8 / 10, state.pointer.x / 2, 0], 0.25, delta
        )
    })

    return (
        <group ref={group}>{children}</group>
    )
}

export default CameraRig