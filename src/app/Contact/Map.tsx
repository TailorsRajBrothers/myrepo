"use client"
import React,{useState} from 'react'
import {
    APIProvider,
    Map,
    Marker,
    Pin,
    InfoWindow,
} from '@vis.gl/react-google-maps'

export default function Maps() {

    const position = {lat:23.236326781434112, lng:77.4002792248728}

  return (
    <div>
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
            <div className="h-[100vh] w-[100vh]">

                <Map defaultCenter={position} defaultZoom={20} >
                    <Marker position={position} />
                </Map>
            </div>
        </APIProvider>
    </div>
  )
}
