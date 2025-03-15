import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Helmet_Container from './Helmet_Container'
import { HueSaturation, EffectComposer } from '@react-three/postprocessing';
import logo from '../../assets/logo.png';
export default function Home() {
    return (
        <div id='home' className='h-full md:h-[90vh] w-full relative flex items-center justify-center text-white'>
        
            <Canvas camera={{ fov: 50 }} className='absolute top-0 w-full'>
                <Environment files={['https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/rosendal_plains_2_4k.hdr']} />
                <EffectComposer>
                    <HueSaturation hue={0.0} saturation={0.8} />
                </EffectComposer>
                <Helmet_Container />
            </Canvas>
            <img src={logo} className='absolute md:w-3/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ' />
        </div>
    )
}
