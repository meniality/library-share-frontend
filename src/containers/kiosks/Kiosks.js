import React from 'react'
import GoogleMapReact from 'google-map-react';
import MapPin from '../../components/kisoks/MapPin'


export default function Kisoks(){

  const center= {
    lat: 39.752153,
    lng: -104.948792
  }
  const zoom= 11
  return(
    <div id ="map">
      <div id="kiosk-title"><h2>Locations of give a book/take a book kisoks.</h2></div>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDuWImETCBx1qTLleQeZpQaT6j8UkLYvnE' }}
        defaultCenter={center}
        defaultZoom={zoom}
        onChildMouseEnter={() => console.log('hit')}
        onChildMouseLeave={() => console.log('hit')}
        >
        <MapPin onClick={()=>{console.log('click')}} lat='39.752153' lng='-104.948792'/>
        <MapPin onClick={()=>{console.log('click')}} lat='39.769117' lng='-104.974112'/>
        <MapPin onClick={()=>{console.log('click')}} lat='39.762766' lng='-104.980788'/>
        <MapPin onClick={()=>{console.log('click')}} lat='39.747229' lng='-104.998633'/>
        <MapPin onClick={()=>{console.log('click')}} lat='39.746569' lng='-104.977347'/>
        <MapPin onClick={()=>{console.log('click')}} lat='39.752418' lng='-104.933562'/>
        <MapPin onClick={()=>{console.log('click')}} lat='39.763387' lng='-104.932506'/>
      </GoogleMapReact>
    </div>
  )
} 