import React from 'react'
import Maps from './Map'
import { Cutive } from '@next/font/google'

const cutive = Cutive({ 
    subsets: ['latin'],
    weight: ['400'],
}
)


export default function Contact() {
  return (
    <div>
        <div className="lg:grid lg:grid-cols-2">
            <div className="lg:h-[50vh] lg:w-[100vh] place-content-center">
                <div className="">
                Address
                </div>
                <div className="">
                New Market
                <br />
                14/48, New Market,South TT Nagar, Bhopal, Madhya Pradesh 462003 
                <br />
                (+91) 9826187264
                </div>
            </div>
            <div className="lg:h-[50vh] lg:w-[100vh] place-content-center">
                <div className="">Contact</div>
                <div className="">
                
                (+91) 9826187264
                <br />
                tailorsrajbrothers@gmail.com   
                </div>
            </div>
            <div className="lg:h-[100vh] lg:w-[100vh] p-10">
                <form>
                    <div className='flex p-8'>

                        <div className="w-1/2">
                            <label htmlFor="">First Name</label>
                            <input type="text" className="h-full p-5 border-b border-blue-gray-200 bg-transparent pt-4 font-sans text-sm font-normal text-blue-gray-700  outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 " />

                        </div>
                        <div className="w-1/2">
                            <label htmlFor="">Last Name</label>
                            <input type="text" className="h-full  p-5 border-b border-blue-gray-200 bg-transparent pt-4 font-sans text-sm font-normal text-blue-gray-700  outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 " />

                        </div>
                    </div>
                        <label htmlFor="" className='p-8'>Email*</label>
                        <input type="email" className="h-full w-full p-5 border-b border-blue-gray-200 bg-transparent pt-4 font-sans text-sm font-normal text-blue-gray-700  outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 " />
                        <label htmlFor="" className='top-3 p-8'>Message</label>
                        <input type="text" className="bottom-8 h-full w-full p-5 border-b border-blue-gray-200 bg-transparent pt-4 font-sans text-sm font-normal text-blue-gray-700  outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 " />
                        <button className=" top-10 p-10 w-full border-8 border-black hover:bg-black hover:text-white">Send</button>
                </form>    
            </div>
            <div className="lg:h-[100vh] lg:w-[100vh] sm:h-full sm:w-full">
                <Maps/>
            </div>
        </div>
    </div>
  )
}
