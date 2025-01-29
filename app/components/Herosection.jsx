import React from 'react'

const Herosection = () => {
  return (
    <section className='text-center py-20'>
        <div className='container mx-auto px-4 '>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-secondary  '>
                Trying to find the 
            </h1>
            <h1 className='text-[#785421] font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-Playwrite_IN mt-6 '>
                    Perfect Gift?
            </h1>
            <p className='text-center text-lg sm:text-xl md:text-2xl font-medium text-gray-800 mt-16 lg:px-48'>
                Make someone feel extra special with a gourmet cookie gift box they won’t forget.
                Your cookies aren’t baked until you order them, that way they taste sensational!
            </p>
            <div className='mt-6 flex flex-col md:flex-row gap-4 justify-center items-center'>
                <button className='px-6 py-3 bg-secondary text-primary font-semibold rounded-md hover:bg-gray-900  shadow-sm'>
                    Order a gift box
                </button>
                <button className='px-6 py-3 bg-secondary text-primary font-semibold rounded-md  hover:bg-gray-900  shadow-sm'>
                    Corporate Gifting
                </button>
            </div>
        </div>
    </section>
  )
}

export default Herosection
