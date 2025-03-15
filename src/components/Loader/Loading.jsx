export default function Loading() {
    return (
        <div className='h-screen w-screen transition-all bg-gradient-to-br to-[#000000] from-[#ffee00bb] loading'>
            <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
					<video autoPlay loop muted className='w-full h-full object-cover'>
						<source src='/cyberpunk.mp4' type='video/mp4' />
						Your browser does not support the video tag.
					</video>
				</div>
            <h1 className="text-9xl text-[#338cff] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Loading...</h1>
        </div>
    )
}
