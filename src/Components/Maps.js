import React, { Component, createRef } from 'react';

export default class GoogleMap extends Component {
	googleMapRef = React.createRef()

	
	componentDidMount () {
		const url = "https://maps.googleapis.com/maps/api/js?key=".concat(process.env.REACT_APP_GOOGLEKEY, "&libraries=places");
		const scriptGoogle = document.createElement('script');
		scriptGoogle.type = 'text/javascript'
		scriptGoogle.src = url
		window.document.body.appendChild(scriptGoogle)

		//googleScript.addEventListener('load', {
		scriptGoogle.addEventListener("load", () => {
			this.googleMap = this.createGoogleMap();
		});
	}

	createGoogleMap = () =>
		new window.google.maps.Map(this.googleMapRef.current, {
			zoom: 16,
			center: { 
				lat: 4.6097100,
				lng: -74.0817500,
			},
			disableDefaultUI: false, 
		})

	createMarker = () =>
	    //if (navigator.geolocation) {
		//	navigator.geolocation.getCurrentPosition(function(position) {
		//		let lati = position.coords.latitude;
		//		let lngi = position.coords.longitude;
		//	};

		new window.google.maps.Marker({
			position: { lat: 4.653007, lng: -74.052774 },
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
