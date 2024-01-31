import './location-details.css'
import {useEffect, useState} from "react";
import axios from "axios";

function LocationDetails() {
    const [city, setCity] = useState('Reading your location...');
    const [country, setCountry] = useState(null);

    useEffect(() => {
        axios.get('http://ip-api.com/json')
            .then((response) => {
                setCity(response.data.city);
                setCountry(response.data.country);
            })
            .catch((error) => {
                console.error('Error fetching location data', error);
            });
    }, []);


    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        axios.get(`http://api.weatherapi.com/v1/current.json?key=8f68bb30633f4445b24105444241901&q=auto:ip&aqi=yes`)
            .then(response => setWeatherData(response.data.current))
            .catch(error => console.error('Error fetching data', error));
    }, []);
    console.log(weatherData);

    if (!weatherData) {
        return <>Loading...</>
    }

    const airQualityIndex = {
        1: 'Good',
        2: 'Moderate',
        3: 'Unhealthy for sensitive group',
        4: 'Unhealthy',
        5: 'Very Unhealthy',
        6: 'Hazardous'
    }

    return (
        <div className="location-wrapper">
            <div className="location-title">
                {city && country ? `${city}, ${country}` : 'Reading your location...'}
            </div>
            {
                weatherData && (
                    <>
                        <div className="temperature-conditions-wrapper">
                            <div className="temperature">
                                {weatherData.temp_c}°
                            </div>
                            <div className="weather-conditions">
                                {weatherData.condition.text}
                            </div>
                            <div className="location-weather-details-wrapper">
                                <div className="location-weather-details">
                                    Wind: {weatherData.wind_kph} km/h
                                </div>
                                <div className="location-weather-details">
                                    Air
                                    quality: {weatherData['air_quality']['us-epa-index']} - {weatherData && weatherData['air_quality'] ?
                                    airQualityIndex[weatherData['air_quality']['us-epa-index']] || 'No data available' : 'No data available'}
                                </div>
                            </div>
                        </div>
                    </>
                )}
        </div>
    );
}

export default LocationDetails;