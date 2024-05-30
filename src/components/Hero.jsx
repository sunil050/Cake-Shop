import React from 'react'

const Hero = () => {
    return (
        <div className='max-w-[1640px] mx-auto p-4'>
            <div className='max-h-[500px] relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-pink-500'>The <span className='text-pink-500'>Best</span></h1>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white'>Cakes <span className='text-white'>in PY</span></h1>
                </div>
                <img className='w-full max-h-[500px] object-cover' src="https://images.unsplash.com/photo-1589091637533-818bc88b5d0f?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cake" />
            </div>
        </div>
    )
}

export default Hero