import React, { Component } from 'react';
let currentpos = [];
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

	currentposition () {
		console.log("about to getting position");
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
				currentpos.push({key: "lat", value: position.coords.latitude});
				currentpos.push({key: "lng", value: position.coords.longitude});
				console.log("Getting position from browser")
			});
		} else {
			console.log("it doesn't work");
			currentpos.push({key: "lat", value: 4.6097100 });
			currentpos.push({key: "lng", value: -74.0817500});
		}

	}


	createGoogleMap = () =>
		new window.google.maps.Map(this.googleMapRef.current, {
			zoom: 16,
			center: currentpos,
			disableDefaultUI: false, 
		})

	createMarker = () =>
		new window.google.maps.Marker({
			position: currentpos,
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
