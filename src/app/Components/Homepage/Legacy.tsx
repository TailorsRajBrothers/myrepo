import React from 'react'
import { Cutive } from '@next/font/google'

const cutive = Cutive({ 
    subsets: ['latin'],
    weight: ['400'],
}
)

export default function Legacy() {
  return (
    <div>
                <div className='sm:hidden lg:bg-Legacy lg:bg-cover lg:bg-fixed lg:h-[100vh] lg:w-full lg:flex '>
                    <div className='lg:w-1/2'></div>
                    <div className="lg:w-1/2 lg:text-white">
                    
                        <div className='p-20' style={{ fontFamily: cutive.style.fontFamily }}>
                        Our Journey: Crafting Elegance Since 1980
                        </div>
                        <div className='p-20'>
                                At Tailors Raj Brothers, our story began in 1980 in the heart of Bhopal, driven by a passion for the art of tailoring and a commitment to timeless elegance. What started as a modest tailoring workshop has evolved into a legacy of craftsmanship, where every stitch tells a story of dedication and precision.

                                From our humble beginnings, we have specialized in creating formal suits and traditional wear that epitomize sophistication and style. Our founder, Jagdish Chourey envisioned a brand where every garment would be a perfect reflection of both classic tailoring techniques and modern sensibilities. Guided by this vision, we have spent over four decades perfecting our craft, always with a focus on delivering impeccable fit and unparalleled quality.

                                Our journey is marked by a dedication to the art of bespoke tailoring. Each suit we create is a testament to our meticulous attention to detail and our commitment to making each client look and feel their best. We pride ourselves on understanding the unique needs of our clients, offering a range of formal and traditional wear that reflects their individual style and enhances their presence.

                                As we continue to build on our legacy, we remain true to our core values of craftsmanship, elegance, and personalized service. Tailors Raj Brothers is not just about clothing; it’s about creating lasting impressions and celebrating the moments that matter. Join us in our journey of sartorial excellence and experience the perfect blend of tradition and modernity in every tailored piece.

                                Welcome to Tailors Raj Brothers — where our legacy becomes your signature style.
                        </div>
                    </div>
                </div>
                
        <div className='lg:hidden sm:bg-Legacy sm:bg-cover sm:bg-fixed sm:h-[100vh] sm:w-full  '>

        </div>
        <div className='lg:hidden sm:p-10 sm:bg-black sm:text-white'>
            <div className='sm:p-5' style={{ fontFamily: cutive.style.fontFamily }}>
            Our Journey: Crafting Elegance Since 1980
            </div>
            <div className='sm:p-5'>
                    At Tailors Raj Brothers, our story began in 1980 in the heart of Bhopal, driven by a passion for the art of tailoring and a commitment to timeless elegance. What started as a modest tailoring workshop has evolved into a legacy of craftsmanship, where every stitch tells a story of dedication and precision.

                    From our humble beginnings, we have specialized in creating formal suits and traditional wear that epitomize sophistication and style. Our founder, Jagdish Chourey envisioned a brand where every garment would be a perfect reflection of both classic tailoring techniques and modern sensibilities. Guided by this vision, we have spent over four decades perfecting our craft, always with a focus on delivering impeccable fit and unparalleled quality.

                    Our journey is marked by a dedication to the art of bespoke tailoring. Each suit we create is a testament to our meticulous attention to detail and our commitment to making each client look and feel their best. We pride ourselves on understanding the unique needs of our clients, offering a range of formal and traditional wear that reflects their individual style and enhances their presence.

                    As we continue to build on our legacy, we remain true to our core values of craftsmanship, elegance, and personalized service. Tailors Raj Brothers is not just about clothing; it’s about creating lasting impressions and celebrating the moments that matter. Join us in our journey of sartorial excellence and experience the perfect blend of tradition and modernity in every tailored piece.

                    Welcome to Tailors Raj Brothers — where our legacy becomes your signature style.
            </div>
        </div>
    </div>
  )
}
