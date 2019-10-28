import React, { Component } from 'react';
let currentpos = [];
export default class GoogleMap extends Component {
	
	state = {
		'currentpos': {'lat': 0, 'lng': 0}
	}

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
		})
	}

	createGoogleMap() {
		console.log("about to getting position")
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				let currentpos = {'lat': position.coords.latitude, 'lng':position.coords.longitude}
				currentpos = {'lat': 4.6097100, 'lng':-74.0817500}				
				new window.google.maps.Map(this.googleMapRef.current, {
					zoom: 16,
					center: currentpos,
					disableDefaultUI: false, 
				})
				this.setState({'currentpos': currentpos})
				console.log("Getting position from browser")
			});
		} else {
			console.log("it doesn't work");
			let currentpos = {'lat': 4.6097100, 'lng':-74.0817500}
			this.setState({'currentpos': currentpos})
		}
		new window.google.maps.Map(this.googleMapRef.current, {
			zoom: 16,
			center: this.state.currentpos,
			disableDefaultUI: false, 
		})
	    }

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
