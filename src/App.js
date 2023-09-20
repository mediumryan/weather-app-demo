import './CSS/index.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function App() {
    const [coords, setCoords] = useState();
    const [datas, setDatas] = useState();

    function handleGeoSucc(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const coordsObj = {
            latitude,
            longitude,
        };
        setCoords(coordsObj);
        getWeather(latitude, longitude);
    }

    function handleGeoErr(err) {
        console.log('geo err! ' + err);
    }

    function requestCoords() {
        navigator.geolocation.getCurrentPosition(handleGeoSucc, handleGeoErr);
    }

    function getWeather(lat, lon) {
        const API_KEY = '30a223157b4e106a3d4631fa76a27b4a';
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
        axios.get(url).then((res) => {
            setDatas(res.data);
        });
    }

    useEffect(() => {
        requestCoords();
    }, []);

    return (
        <div id="main_container">
            <div className="weather_card">
                <h2 className="location">{datas && datas.name}</h2>
                <p className="temp">
                    <span className="tag">현재 온도 : </span>
                    {datas && Math.floor(datas.main.temp)}°C
                </p>
                <p className="weather">
                    <span className="tag">날씨 : </span>
                    {datas && datas.weather[0].main}
                </p>
                <p className="weather">
                    <span className="tag">습도 : </span>
                    {datas && datas.main.humidity}%
                </p>
            </div>
        </div>
    );
}
