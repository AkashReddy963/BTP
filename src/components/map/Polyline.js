import { Component } from 'react'

export default class Polyline extends Component {
  renderPolylines () {
    const { markers, markers1, map, maps, res } = this.props
    var temp =res[1].color
    if(temp="yellow")
     {var temp1='#FFFF00'
     console.log(temp1)}
    else
     var temp1='#008000' 
    /** Example of rendering geodesic polyline */
    let geodesicPolyline = new maps.Polyline({
      path: markers,
      geodesic: true,
      strokeColor: temp1,
      strokeOpacity: 1.0,
      strokeWeight: 0
    })
    geodesicPolyline.setMap(map)

    /** Example of rendering non geodesic polyline (straight line) */
    let nonGeodesicPolyline = new maps.Polyline({
      path: markers,
      geodesic: false,
      strokeColor: temp1,
      strokeOpacity: 0.7,
      strokeWeight: 10
    })
    nonGeodesicPolyline.setMap(map)

    let geodesicPolyline1 = new maps.Polyline({
      path: markers1,
      geodesic: true,
      strokeColor: temp1,
      strokeOpacity: 1.0,
      strokeWeight: 0
    })
    geodesicPolyline1.setMap(map)

    /** Example of rendering non geodesic polyline (straight line) */
    let nonGeodesicPolyline1 = new maps.Polyline({
      path: markers1,
      geodesic: false,
      strokeColor: temp1,
      strokeOpacity: 0.7,
      strokeWeight: 10
    })
    nonGeodesicPolyline1.setMap(map)
  }

  render () {
    this.renderPolylines()
    return null
  }
}