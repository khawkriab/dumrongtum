import React, { useState, useEffect, useMemo } from 'react';
import { geolocated } from 'react-geolocated';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import Geocode from 'react-geocode';
import { api_key } from '../Static/config';
import styled from 'styled-components';
// "https://maps.googleapis.com/maps/api/js?key=AIzaSyD43SeeK0T2f8VSxodgskBbKYj_0IoTe1Y",
const pipe = (...fn) => (x) => fn.reduce((v, f) => f(v), x);
const withGeo = geolocated({ positionOptions: { enableHighAccuracy: false }, userDecisionTimeout: 5000 });

Geocode.setApiKey(api_key);

const MyMap = pipe(withGoogleMap, withScriptjs)(({ isMarkerShown, coords, onMarkerChange, markerCoords }) => {
	const _onDragEnd = async (e) => {
		const { lat: fnLat, lng: fnLng } = e.latLng;
		const lat = fnLat();
		const lng = fnLng();
		try {
			const response = await Geocode.fromLatLng(lat, lng);
			const location_name = response.results[0].formatted_address;
			onMarkerChange({ lat, lng, location_name });
		} catch (error) {
			console.error(error);
		}

		onMarkerChange({ lat, lng, location_name: 'Projectsoft Thailand' });
	};

	console.log('render My map');

	return (
		<GoogleMap defaultZoom={8} defaultCenter={{ lat: coords.latitude, lng: coords.longitude }} streetView={false}>
			{isMarkerShown && (
				<Marker
					position={
						markerCoords.lat && markerCoords.lng ? (
							markerCoords
						) : (
							{ lat: coords.latitude, lng: coords.longitude }
						)
					}
					title={coords.location_name}
					draggable={true}
					onDragEnd={_onDragEnd}
				/>
			)}
		</GoogleMap>
	);
});

const MapComponent = ({ coords, isGeolocationEnabled, onMarkerChange, markerCoords }) => {
	// console.log('render map component', coords);

	return (
		<div>
			{coords ? (
				<MyMap
					googleMapURL={
						'https://maps.googleapis.com/maps/api/js?key=' +
						api_key +
						'&v=3.exp&libraries=geometry,drawing,places'
					}
					loadingElement={<div style={{ height: `100%` }} />}
					containerElement={<div style={{ height: `400px` }} />}
					mapElement={<div style={{ height: `100%` }} />}
					isMarkerShown={true}
					coords={coords}
					markerCoords={markerCoords}
					onMarkerChange={onMarkerChange}
				/>
			) : (
				<div
					style={{
						height: '400px',
						backgroundColor: 'gray',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						color: '#fff'
					}}
				>
					{!isGeolocationEnabled ? 'กรุณาเปิดใช้งานโลเคชั่น' : 'บราว์เซอร์ไม่ซับพอร์ทการใช้งานโลเคชั่น'}
				</div>
			)}
		</div>
	);
};

export default withGeo(MapComponent);
