import { Environment, OrbitControls, Html } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import Car_Container from './Car_Container';

export default function Screenshots() {
    return (
        <div id='community' className='h-screen w-full relative flex items-center justify-between bg-gradient-to-b from-[#5c5600] to-[#fff000]'>
            <div className='w-full relative h-full md:h-full md:w-1/2 '>
                <Canvas camera={{ fov: 50, near: 0.1, far: 1000, position: [-1, 0.5, -1], castShadow: true }} className='h-full absolute w-full'>
                    <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 3} />
                    <Environment files={['https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/autumn_field_puresky_4k.hdr']} />
                    <Car_Container />
                </Canvas>
            </div>
        </div>
    );
}
