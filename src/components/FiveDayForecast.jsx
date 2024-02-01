import {useState} from "react";
import {Chart as ChartJs} from 'chart.js/auto';
import {Line} from 'react-chartjs-2';
import './location-and-weather-details.css'

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: false
        },
    },
};
const labels = ['1', '2', '3', '4', '5'];
export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: ['1', '2', '3'],
            borderColor: '#FFC701',
            backgroundColor: '#D9D9D9',
        },
        {
            label: 'Dataset 2',
            data: ['3', '2', '1'],
            borderColor: '#3569EE',
            backgroundColor: '#D9D9D9',
        },
    ],
};

function FiveDayForecast() {
    const [weatherData, setWeatherData] = useState(null);
    return (
        <>
            <div className="weather-details-column">
                <div className="details-and-forecast-title">5-day Weather Forecast</div>
                <div className="five-day-forecast-wrapper">
                    <Line options={options} data={data}/>
                </div>
            </div>
        </>
    )
}

export default FiveDayForecast;