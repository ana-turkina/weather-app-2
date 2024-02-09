import {useEffect, useState} from "react";
import {Chart as ChartJs} from 'chart.js/auto';
import {Line} from 'react-chartjs-2';
import './location-and-weather-details.css'
import {weatherApiKey} from "../assets/weatherApiKey";

export const options = {
    responsive: true,
    scales: {
        y: {
            grid: {
                display: false,
            },
            ticks: {
                display: false,
            }
        },
        x: {
            position: 'top',
            grid: {
                display: false,
            },
            ticks: {
                display: true,
                color: '#7D7878',
                padding: 35,
                font: {
                    family: 'Work Sans',
                    size: 20,
                    style: 'normal',
                    weight: 500,
                //     lineHeight: 0
                },
            }
        }
    },
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: false
        },
        tooltip: {
            enabled: true,
        },
    },
    elements: {
        point: {
            radius: 7.5,
            hoverRadius: 7.5,
        },
        line: {
            borderWidth: 3,
        }
    },

};

function ThreeDayForecast() {
    const [weatherChartData, setWeatherChartData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=auto:ip&days=3`);
                const data = await response.json();
                const labels = data.forecast.forecastday.map(day => {
                    let date = new Date(day.date);
                    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                    return days[date.getDay()];
                });
                const minTemp = data.forecast.forecastday.map(day => day.day.mintemp_c);
                const maxTemp = data.forecast.forecastday.map(day => day.day.maxtemp_c);
                const updatedData = {
                    labels,
                    datasets: [
                        {
                            label: 'Minimum Temperature',
                            data: minTemp,
                            borderColor: '#3569EE',
                            backgroundColor: '#D9D9D9',
                        },
                        {
                            label: 'Max Temperature',
                            data: maxTemp,
                            borderColor: '#FFC701',
                            backgroundColor: '#D9D9D9',
                        },
                    ],
                };
                setWeatherChartData(updatedData);
            } catch (e) {
                console.error(e);
            }
        };
        fetchData();
    }, []);
    return (
        <>
            {
                weatherChartData ? (
                    <div className="weather-details-column">
                        <div className="details-and-forecast-title">3-day Weather Forecast</div>
                        <div className="three-day-forecast-wrapper">
                            <div className="forecast-chart-wrapper">
                                <Line options={options} data={weatherChartData}/>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
        </>
    )
}

export default ThreeDayForecast;