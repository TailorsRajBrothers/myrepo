import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../../../../public/Logo.png'

export default function Navbar() {
  return (
    <>
    <div className="bg-slate-900 h-32 w-full"></div>
    <div className="sm:hidden lg:flex  lg:h-32 lg:w-full lg:items-center text-slate-200  backdrop-filter backdrop-blur-lg  opacity-95 py-2 shadow-md shadow-black/5 dark:bg-neutral-900 5 fixed top-0 z-10">

        <div className="lg:w-1/3 lg:p-10">
            <Image 
            src={Logo}
            alt="TRB logo"
            width={100}
            height={100}
            />
        </div>
        <div className='lg:w-2/3 lg:flex  lg:justify-between '>
            <Link href='/Home' className='lg:p-10 hover:text-white text-gray-400'> Home</Link>
            <Link href='/Shop' className='lg:p-10 hover:text-white text-gray-400'> Shop</Link>
            <Link href='/About' className='lg:p-10 hover:text-white text-gray-400'> About</Link>
            <Link href='/Contact' className='lg:p-10 hover:text-white text-gray-400' > Contact</Link>
        </div>
    </div>
    <div className="lg:hidden sm:flex  sm:h-32 sm:w-full sm:items-center text-slate-200  backdrop-filter backdrop-blur-lg  opacity-95 py-2 shadow-md shadow-black/5 dark:bg-neutral-900 5 fixed top-0 z-10">

        <div className="p-2">
            <Image 
            src={Logo}
            alt="TRB logo"
            width={50}
            height={50}
            />
        </div>
        <div className=' sm:flex  sm:justify-between '>
            <Link href='/Home' className='sm:p-1 hover:text-white text-gray-400'> 
                <div className="">
                    
                    Home
                </div>
            </Link>
            <Link href='/Shop' className='sm:p-1 hover:text-white text-gray-400'>
            <div className=""></div>
             Shop
            </Link>
            <Link href='/About' className='sm:p-1 hover:text-white text-gray-400'>
            <div className=""></div>
             About
            </Link>
            <Link href='/Contact' className='sm:p-1 hover:text-white text-gray-400'>
            <div className=""></div>
             Contact
            </Link>
        </div>
       

    </div>
    </>
  )
}
