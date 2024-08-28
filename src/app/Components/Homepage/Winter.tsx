import React from 'react'
import { Cutive } from '@next/font/google'

const cutive = Cutive({ 
    subsets: ['latin'],
    weight: ['400'],
}
)
export default function Winter() {
  return (
        <>

    <div className=' sm:hidden lg:flex'>
        <div className='sm:hidden  lg:bg-Winter lg:bg-cover lg:bg-fixed lg:h-[100vh] lg:w-1/2'>

        </div>
        <div className='sm:hidden  lg:w-1/2 lg:bg-black lg:text-white lg:p-20'> 
            <div className='sm:hidden  lg:p-20 lg:top-12' style={{ fontFamily: cutive.style.fontFamily }}>
            Where tradition meets timeless style
            </div>
            <div className='sm:hidden  lg:p-20 lg:top-12'>
            At Tailor&apos;s Raj Brothers, we blend tradition with timeless design by combining classic tailoring 
            techniques with contemporary elements. Our expert craftsmanship honors heritage while integrating
            modern cuts and high-quality fabrics. Offering bespoke services, we personalize each garment to
            reflect individual style, merging traditional elegance with modern sophistication. This seamless
            fusion ensures that every piece is both enduringly stylish and perfectly suited to today&apos;s 
            discerning gentleman.
            </div>
            <button className="sm:hidden 
             ml-8 bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4 border border-white hover:border-white
            ">Shop</button>
        </div>

    </div>
    <div className='lg:hidden sm:p-1'>
        <div className=' sm:bg-Winter sm:bg-cover sm:bg-fixed sm:h-[100vh] sm:w-full'>

        </div>
        <div className='lg:hidden sm:w-full sm:bg-black sm:text-white sm:p-10'> 
            <div className='lg:hidden  sm:top-12' style={{ fontFamily: cutive.style.fontFamily }}>
            Where tradition meets timeless style
            </div>
            <div className='lg:hidden sm:mt-7 sm:top-12'>
            At Tailors Raj Brothers, we blend tradition with timeless design by combining classic tailoring 
            techniques with contemporary elements. Our expert craftsmanship honors heritage while integrating
            modern cuts and high-quality fabrics. Offering bespoke services, we personalize each garment to
            reflect individual style, merging traditional elegance with modern sophistication. This seamless
            fusion ensures that every piece is both enduringly stylish and perfectly suited to today&apos;s 
            discerning gentleman.
            </div>
            <button className="lg:hidden  sm:mt-7 
            ml-8 bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4 border border-white hover:border-white
            ">Shop</button>
        </div>

    </div>
    
        </>
  )
}
