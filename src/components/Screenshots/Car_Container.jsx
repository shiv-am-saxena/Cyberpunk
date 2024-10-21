import { useGLTF } from '@react-three/drei';
import React from 'react';
import { useFrame, useThree } from "@react-three/fiber";

export default function Car_Container() {
    let model = useGLTF('./car/scene.gltf').scene;
    const { viewport } = useThree();
    const car = React.useRef(null);
    useFrame((state, delta) => {
        car.current.rotation.y += delta/3;
    })
    return (
        <group>
            <primitive object={model} ref={car} scale={(viewport.width > viewport.height) ? (viewport.width / 2 * 0.00025) : (viewport.width / 2 * 0.0025)} />
        </group>
    );
}
