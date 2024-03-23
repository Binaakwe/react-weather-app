import React from "react";
import "./Weather.css"

export default function Weather() {
    return (
        <div className="Weather">
            <form>
                <input type="search" placeholder="Enter a City..."/>
                <input type="submit" value="Search"/>
            </form>
            <h1>Toronto</h1>
            <div className="row">
               <div className="col-7">
                    <ul>
                        <li>Friday, 21:10</li>
                        <li>Snow</li>
                    </ul>
                    <ul>
                        <li>Humidity: 87%</li>
                        <li>Wind Speed: 10.8km/h</li>
                        <li>Precipitation:</li>
                    </ul>
                </div>
                <div className="col-5">
                    -4ºC
                    <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/snow-night.png" alt="snow"/>
                </div>
            </div>
        </div>
    )
}