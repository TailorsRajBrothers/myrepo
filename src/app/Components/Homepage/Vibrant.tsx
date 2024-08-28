"use client"

import React,{useRef,useEffect} from 'react'
import { Cutive } from '@next/font/google'
import Link from 'next/link';

const cutive = Cutive({ 
    subsets: ['latin'],
    weight: ['400'],
}
)


export default function Vibrant() {
    
    const imageRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
          if (imageRef.current !== null ) { // Check if the element exists
            const scrollY = window.scrollY;
            const imageOffset = scrollY/8;
            const imageStyle = imageRef.current.style;
            imageStyle.transform = `translateX(-${imageOffset}px)`;
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [imageRef]);

return ( 
    <div>

        <div className=" sm:hidden lg:relative lg:container lg:h-[100vh] lg:w-full ">
            <section className="lg:z-10">
                <div className=" lg:absolute  lg:h-[80vh]  lg:w-[100vh]   lg:ml-[90vh] lg:top-[10vh]">
                     <div className="lg:overflow-x-hidden  ">

                        <div ref={imageRef} className="lg:bg-Vibrant lg:bg-cover lg:bg-no-repeat lg:bg-fixed lg:h-[80vh] lg:w-[140vh] lg:inset-2 lg:-top-3  lg:-z-0"></div>

                     </div>
                </div>
            </section>
            <section className=" lg:flex lg:w-full lg:absolute lg:-z-20  lg:h-[95vh]">
                <div className="lg:w-[100vh] lg:h-full lg:bg-black lg:text-white p-20">
                        <div className='p-20 top-12' style={{ fontFamily: cutive.style.fontFamily }}>
                            Tailored perfection: Bhopal&apos;s premium menswear tailoring brand
                        </div>
                        <div className='p-20'>
                            Specializing in formal suits, we blend tradition with innovation to deliver
                            impeccably tailored garments that enhance your presence and exude confidence. 
                            From bespoke suits to meticulously crafted ready-to-wear options, our collections 
                            cater to the discerning gentleman who values both tradition and modernity.
                        </div>
                        <Link href='/Shop' className=''>

                        <button className=" ml-8 bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4 border border-white hover:border-white">Shop</button>
                        </Link>
                </div>

            </section>
        </div>
        <div className="lg:hidden sm:visible">
            <div className=" lg:hidden sm:h-full sm:w-full">
                <div className=" sm:bg-Vibrant sm:bg-cover sm:bg-fixed  sm:h-[100vh] sm:w-full"></div>
            </div>
            <div className="">
                <div className="lg:hidden sm:w-full lg:h-full sm:bg-black sm:text-white sm:p-10 ">
                            <div className=' top-12' style={{ fontFamily: cutive.style.fontFamily }}>
                                Tailored perfection: Bhopal&apos;s premium menswear tailoring brand
                            </div>
                            <div className=' mt-7'>
                                Specializing in formal suits, we blend tradition with innovation to deliver
                                impeccably tailored garments that enhance your presence and exude confidence. 
                                From bespoke suits to meticulously crafted ready-to-wear options, our collections 
                                cater to the discerning gentleman who values both tradition and modernity.
                            </div>
                            <Link href='/Shop' className=''>

                            <button className=" ml-8 mt-7 bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4 border border-white hover:border-white">Shop</button>
                            </Link>
                    </div>


            </div>
        </div>




        
    </div>
  )
}
