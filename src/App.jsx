import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Loading from './components/Loader/Loading';

export default function App() {
	const [screenLoading, setScreenLoading] = React.useState(false);

	React.useEffect(() => {
		setScreenLoading(true);
		setTimeout(() => {
			setScreenLoading(false);
		}, 5000);
	}, []);
	return (
		<>
			{screenLoading ? <div className={`transition-all ${screenLoading? 'block': 'h-0 duration-500'}`} onClick={()=>{setScreenLoading(false)}}><Loading /> </div>: <div className='h-screen flex flex-col gap-5 bg-gradient-to-tr from-yellow-300 to-black overflow-hidden'>
				<div className='hidden md:block absolute top-0 left-0 w-full h-full overflow-hidden'>
					<video autoPlay loop muted className='w-full h-full object-cover'>
						<source src='/cyberpunk.mp4' type='video/mp4' />
						Your browser does not support the video tag.
					</video>
				</div>
				<Navbar />
				<Home />
			</div>}
		</>
	)
}
