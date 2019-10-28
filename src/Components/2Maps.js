import React, { Component } from 'react';
const currentpos = [];
let initialmap = { zoom: 16, center: currentpos, disableDefaultUI: False};
export default class GoogleMap extends Component {
	googleMapRef = React.createRef()
    
	componentDidMount () {
		const url = "https://maps.googleapis.com/maps/api/js?key=".concat(process.env.REACT_APP_GOOGLEKEY, "&libraries=places");
		const scriptGoogle = document.createElement('script');
		scriptGoogle.type = 'text/javascript'
		scriptGoogle.src = url
		window.document.body.appendChild(scriptGoogle)

		scriptGoogle.addEventListener("load", () => {
			this.googleMap = this.createGoogleMap()
		})
	}

	currentPosition() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
			    currentpos["lat"] = parseFloat(position.coords.latitude)
			    currentpos["lng"] = parseFloat(position.coords.longitude)
			})
		}

	createGoogleMap = () =>
	    new window.google.maps.Map(this.googleMapRef.current, initialmap);

	createMarker = () =>
		new window.google.maps.Marker({
			position: {"lat" : parseFloat(currentpos.lat), "lng": parseFloat(currentpos.lng)},
			map: this.googleMap,
		})
		

	render (){
		return ( 
			<div
				id="google-map"
				ref={this.googleMapRef}
				style={{ width: '100%', height: '100%' }}
			/>
		)
	}
}
