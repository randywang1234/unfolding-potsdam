import React,{useState,} from 'react';
import { MapContainer, TileLayer, Marker, Popup, } from 'react-leaflet'
import"./Map.css"
import data from './data'




const Map = ({setContent,setHidden,hidden}) => {



  const onClick = (data) => {
        setContent(data)
        console.log(data)
        setHidden(!hidden)
    }
 
  



  return (
  <MapContainer center={[35.3939175, 65.0598719]} zoom={4} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://api.mapbox.com/styles/v1/randy0605/ckyx0rlqg000t14ntifz5yx1o/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicmFuZHkwNjA1IiwiYSI6ImNrN2sxNmR0bzAwbTYzZ3BiNnFjbnRuMTcifQ.RbVJnPQCgHjQX54pwB58zg"
  />
  { data.map((item)=>{
    return (
      <Marker 
      key={item.id}
      position={[item.lat, item.lng]}
      eventHandlers={{
            click: () => onClick(item),
          }}

      >
        <Popup>
          <a className='title' href={item.link}>{item.name}</a> <br /> <span>{item.address}</span>.
        </Popup>
      </Marker>

  )})
  
  }
</MapContainer>
  
  );
}

export default Map;
