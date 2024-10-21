import { useGLTF } from '@react-three/drei';
import React from 'react';
import { useThree } from "@react-three/fiber";
import gsap from 'gsap';

export default function Helmet_Container() {
    let model = useGLTF('./helmet/DamagedHelmet.gltf').scene;
    const targetRef = React.useRef(null);

    React.useEffect(() => {
        const handleMouseMove = (event) => {
            const rotationX = (event.clientY / window.innerHeight - 0.5) * Math.PI * 0.2;
            const rotationY = (event.clientX / window.innerWidth - 0.5) * Math.PI * 0.2;
            // console.log(rotationX, rotationY);

            gsap.to(targetRef.current.rotation, {
                x: rotationX,
                y: rotationY,
                duration: 0.5,
                ease: 'power2.out'
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const { viewport } = useThree();

    return (
        <group>
            <primitive object={model} ref={targetRef} scale={(viewport.width > viewport.height) ? (viewport.width / 2 * 0.3) : (viewport.width / 2 * 0.6)} />
        </group>
    );
}
