import './location-and-weather-details.css'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip
);

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
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: 1,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: 2,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

function FiveDayForecast() {
    return (
        <>
            <div className="weather-details-column">
                <div className="details-and-forecast-title">5-day Weather Forecast</div>
                <div className="five-day-forecast-wrapper">
                    <Line options={options} data={data} />
                </div>
            </div>
        </>
    )
}

export default FiveDayForecast;