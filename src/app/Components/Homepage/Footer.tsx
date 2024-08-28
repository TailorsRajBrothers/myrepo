import React from 'react'
import Image from 'next/image'
import Logo from '../../../../public/Logo.png'

export default function Footer() {
  return (
    <>
    <div>
        <div className="flex flex-col lg:space-y-4 lg:p-16 sm:space-y-2">

            <div className="place-self-center">
            Are you on the list?
            </div>
            <div className="place-self-center">
            Join to get exclusive updates from Tailor&apos;s Raj Brothers
            </div>
            <label htmlFor="" className="place-self-center"> Enter Your Email here* </label>
            <input type="text" className="place-self-center block w-72 rounded-md border-0 py-1.5 pl-3 pr-6 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Email' />
            <button className='bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4 border border-white hover:border-black'>Join</button>
            <br />
        </div>
        <div className="lg:justify-around lg:items-center lg:flex lg:p-10 sm:flex sm:flex-col sm:space-y-4">
            <div className="lg:w-1/4 sm:place-self-center">
                <Image
                src={Logo}
                alt='Tailors Raj Brothers'
                width={200}
                height={200}/>
            </div>
            <div className="lg:w-1/4 sm:place-self-center sm:p-4">
                <p>
                Our Stores
                </p>
                <p>
                14/28, New Market, South TT Nagar, Bhopal(462003)
                <br />     
                (+91) 9826187264
                </p>
            </div>
            <div className="lg:w-1/4 sm:place-self-center sm:p-4">
                
                    <p>Policy</p>
                    <p>

                    Refunds & Cancellations 

                    Store Policy 
                    </p>
            </div>
            <div className="lg:w-1/4 sm:place-self-center sm:p-4">
                
                <p>Customer Service</p>
                <p>
                Tel: +91-9826187264

                Email: tailorsrajbrothers@gmail.com
                </p>
            </div>
        </div>
    </div>

    </>
  )
}
