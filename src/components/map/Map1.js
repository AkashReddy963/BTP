import React from 'react'
import GoogleMap from 'google-map-react'
import Marker from './Marker'
import axios from 'axios';
import {render} from '@testing-library/react';
import Polyline from './Polyline'
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const getMapOptions = (maps) => {
  return {
    disableDefaultUI: true,
    mapTypeControl: true,
    streetViewControl: true,
    mapTypeControlOptions: {
      mapTypeIds: [
          maps.MapTypeId.TERRAIN
      ]
  },
    styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
  };
};

class Map extends React.Component {
   // console.log(location)

    constructor(props){
        super(props);
        this.state={rows:[],
                    mapsLoaded: false,
                    map: null,
                    maps: null};
    }

    async getData(){
        const response = await axios.get(`http://localhost:5000/check`)
        return await response.data;
    }
    onMapLoaded (map, maps) {
    this.fitBounds(map, maps)

    this.setState({
      mapsLoaded: true,
      map: map,
      maps: maps
    })
  }
  fitBounds (map, maps) {
    var bounds=new maps.LatLngBounds()
    for (let marker of this.props.markers) {
      bounds.extend(
        new maps.LatLng(marker.lat, marker.lng)
      )
    }
    map.fitBounds(bounds)
  }

  afterMapLoadChanges () {
    return (
      <div style={{display: 'none'}}>
        <Polyline
          map={this.state.map}
          maps={this.state.maps}
          markers={this.props.markers}
          markers1={this.props.markers1} 
          res={this.state.rows}/>
      </div>
    )
  }
    componentDidMount(){
        var row=[]
        var row1=[]
        var res={}
        axios({
            method: 'get',
            url: 'http://localhost:5000/check'
        })
        .then(resData=>resData.data)
        .then(res => {
            console.log(res);
        
        // this.getData().then(data=>{
        //     res=data;
        // }).catch(err=>{console.log(err)});

        for (var i=0;i<res.river_locations.length;i++){
            row.push(<Marker 
            lat={res.river_locations[i].lat}
            lng={res.river_locations[i].lng}
            name="My marker"
            color={res.river_locations[i].color}
            />)
                     
            
        }

                     
            
        
        
     //   console.log(row);
        this.setState({rows:row}); 
    
        // });
    });
}
    render(){
     const triangleCoords = [
           {lat: 13.237427429986727, lng: 75.17831168101472},
           {lat: 13.234040650475047, lng: 75.17587879338807},
           {lat: 13.226919318280471, lng: 75.17499314466153}];
    return (<div className="map" style={{ height: '100vh', width: '100%' }}>  
        <GoogleMap
          bootstrapURLKeys={{ key: 'AIzaSyDUjKlnObDJwUO6f2ueMvzc3UyF_Jepd5U&v=3.exp' }}
          defaultCenter={this.props.location}
          defaultZoom={this.props.zoomLevel}
          options={getMapOptions}
          yesIWantToUseGoogleMapApiInternals={true}
          onGoogleApiLoaded={({map, maps}) => this.onMapLoaded(map, maps)}
        >
          {this.state.rows}
          {this.state.mapsLoaded ? this.afterMapLoadChanges() : ''}
        </GoogleMap>
    </div>);
    }
}



export default Map;


