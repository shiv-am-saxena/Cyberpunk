import { useState } from 'react'
import logo from '../../assets/logo.png';
import Hamburger from './Hamburger'
export default function Navbar() {
    const [show, setShow] = useState(false);
    return (
        <nav className={`relative m-2 px-5 md:px-10 ${show ? 'min-h-64' : 'min-h-20' } transition-all rounded-lg flex-wrap md:max-h-20 flex justify-between border border-[#52bedc] items-center backdrop-blur-xl`}>
            <div id="logo" className=' max-h-20 transition-all '>
                <img src={logo} alt="Cyberpunk-2077-logo" className='max-h-14' />
            </div>
            <button className="md:hidden transition-all " onClick={() => { setShow(!show)}}>
                <Hamburger />
            </button>
            <div id="nav-links" className={`md:flex ${show ? ' w-full flex flex-col items-center justify-center ': 'hidden'}  transition-all  md:flex-row md:gap-14`}>
                <li className='list-none w-fit'><a className='p-2 text-3xl text-[#52bedc] transition-all' href="#home">Home</a></li>
                <li className='list-none w-fit'><a className='p-2 text-3xl hover:text-[#52bedc] transition-all' href="#community">Community</a></li>
                <li className='list-none w-fit'><a className='p-2 text-3xl hover:text-[#52bedc] transition-all' href="#">News</a></li>
                <li className='list-none w-fit'><a className='p-2 text-3xl hover:text-[#52bedc] transition-all' href="#">Download</a></li>
            </div>
        </nav>
    )
}
