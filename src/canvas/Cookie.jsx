/* eslint-disable react/no-unknown-property */
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF } from '@react-three/drei';
import { LoopSubdivision } from 'three-subdivide';

import state from '../store';

const Cookie = () => {
    const snap = useSnapshot(state);
    const { nodes, materials } = useGLTF('/var_02.glb');

    const iterations = 1;
    const params = {
        split: false,       // optional, default: true
        uvSmooth: false,      // optional, default: false
        preserveEdges: false,      // optional, default: false
        flatOnly: false,      // optional, default: false
        maxTriangles: Infinity,   // optional, default: Infinity
    };

    const geometry = LoopSubdivision.modify(nodes.var_02.geometry, iterations, params);



    useFrame((state, delta) => easing.dampC(materials.cookie_LP.color, snap.color, 0.25, delta));

    const stateString = JSON.stringify(snap);

    return (
        <group key={stateString}>
            <mesh
                castShadow
                geometry={geometry}
                material={materials.cookie_LP}
                material-roughness={2}
                dispose={null}
            >
                {snap.isFullTexture && (
                    <Decal
                        position={[0, 0, 0]}
                        rotation={[0, 0, 0]}
                        scale={1}
                    />
                )}



            </mesh>
        </group>
    )
}

export default Cookie