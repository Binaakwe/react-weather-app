import React from "react";
import "./Weather.css"

export default function Weather() {
    return (
        <div className="Weather">
            <div class="col text-center">
                <form>
                    <input type="search" placeholder="Enter a City..." className="search-input"/>
                    <input type="submit" value="Search" className="search-button"/>
                </form>
            </div>
            <h1>Toronto</h1>
            <div className="row">
               <div className="col-6">
                    <ul className="weather-info">
                        <li>Friday, 21:10</li>
                        <li>Snow</li>
                    </ul>
                    <ul className="weather-details">
                        <li>Humidity: 87%</li>
                        <li>Wind Speed: 10.8km/h</li>
                        <li>Precipitation:</li>
                    </ul>
                </div>
                <div className="col-6">
                    <span className="temperature">-4</span>
                    <span className="unit">°C</span>
                    <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/snow-night.png" alt="snow"/>
                </div>
            </div>
        </div>
    )
}