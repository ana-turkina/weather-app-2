import './location-details.css'

function LocationDetails() {
    return (
        <div className="location-wrapper">
            <div className="location-title">
                Location Name
            </div>
            <div className="temperature-conditions-wrapper">
                <div className="temperature">
                    T°
                </div>
                <div className="weather-conditions">
                    Weather Conditions
                </div>
                <div className="location-weather-details-wrapper">
                    <div className="location-weather-details">
                        Sun
                    </div>
                    <div className="location-weather-details">
                        Air quality:
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LocationDetails;