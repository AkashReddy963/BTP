import React from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker'
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const getMapOptions = (maps) => {
  return {
    disableDefaultUI: true,
    mapTypeControl: true,
    streetViewControl: true,
    mapTypeControlOptions: {
      mapTypeIds: [
          maps.MapTypeId.SATELLITE
      ]
  },
    styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
  };
};

export default function Map({ location, zoomLevel,river_locations }) {
    // console.log(location)
    var rows=[]
    for (var i=0;i<river_locations.length;i++){
      rows.push(<Marker 
      lat={river_locations[i].lat}
      lng={river_locations[i].lng}
      name="My marker"
      color={river_locations[i].color}
      />)
    }
    return (<div className="map" style={{ height: '100vh', width: '100%' }}>  
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDUjKlnObDJwUO6f2ueMvzc3UyF_Jepd5U&v=3.exp' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
          options={getMapOptions}
        >
          {rows}
        </GoogleMapReact>
    </div>);
}
//   <LocationPin
//             lat={location.lat}
//             lng={location.lng}
//             text={location.address}
//           />

{/* <Marker
lat={15.8887}
lng={78.1643}
name="My Marker"
color="blue"
/>
<Marker
lat={15.8887}
lng={78.2643}
name="My Marker"
color="red"
/> */}

