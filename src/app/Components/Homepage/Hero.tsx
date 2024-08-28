import React from 'react'
import { Cutive } from '@next/font/google'

const cutive = Cutive({ 
    subsets: ['latin'],
    weight: ['400'],
}
)

export default function Hero() {
  return (
    <div>
    
        <div className="sm:hidden  lg:bg-Hero lg:bg-cover lg:bg-fixed lg:h-[100vh] lg:w-full">
            <div className=" lg:flex">
                <div className=" lg:w-1/2"></div>
                <div className=" lg:w-1/2 lg:p-14 lg:text-black lg:backdrop-brightness-75 ">
                
                    <div className='lg:mt-16' style={{ fontFamily: cutive.style.fontFamily }}>
                    Your Legacy in Every Stitch
                    </div>
                    <div className='p-20'>
                    Welcome to Tailors Raj Brothers,
                    Bhopal&apos;s epitome of refined men&apos;s tailoring.
                    We specialize in formal suits that blend classic
                    craftsmanship with contemporary style. 
                    Our legacy of meticulous attention to detail 
                    ensures each suit is a masterpiece, enhancing 
                    your presence with elegance and sophistication. Discover bespoke and ready-to-wear options crafted to fit your unique taste and elevate your wardrobe. Experience sartorial excellence with Tailors Raj Brothers, where tradition meets modern refinement.
                    </div>
                    <button className="ml-8 bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4 border border-white hover:border-black">Shop</button>
                </div>
            </div>

        </div>
        <div className="lg:hidden sm:bg-Hero sm:bg-cover sm:bg-fixed sm:h-[100vh] sm:w-full"></div>
        <div className="lg:hidden sm:bg-black sm:text-white sm:p-10 ">
            <div style={{ fontFamily: cutive.style.fontFamily }}>
            Your Legacy in Every Stitch
            </div>
            <div>
            Welcome to Tailors Raj Brothers,
            Bhopal&apos;s epitome of refined men&apos;s tailoring.
            We specialize in formal suits that blend classic
            craftsmanship with contemporary style. 
            Our legacy of meticulous attention to detail 
            ensures each suit is a masterpiece, enhancing 
            your presence with elegance and sophistication. Discover bespoke and ready-to-wear options crafted to fit your unique taste and elevate your wardrobe. Experience sartorial excellence with Tailors Raj Brothers, where tradition meets modern refinement.
            </div>
            <button className='place-self-center mt-7 bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4 border border-white hover:border-black'>Shop</button>
        </div>

        
    </div>
  )
}
