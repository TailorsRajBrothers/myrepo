import React from 'react'
import Hero from '../Components/Homepage/Hero'
import Vibrant from '../Components/Homepage/Vibrant'
import Legacy from '../Components/Homepage/Legacy'
import Winter from '../Components/Homepage/Winter'

export default function Home() {
  return (
    <div className=''>
            <Hero/>
            <Vibrant/>
            <Winter/>
            <Legacy/>
    </div>
  )
}
