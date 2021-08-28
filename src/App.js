import "./App.css";
import Card from "./UI/Card";
import { useState, useEffect } from "react";
import axios from "axios";
const weeklyWeather = {
	location: "San Jose",
	days: [
		{
			key: Math.random(),
			day: "Monday",
			date: new Date(2021, 8, 23),
			condition: "clear sky",
			temp: 35,
		},
		{
			key: Math.random(),
			day: "Tuesday",
			date: new Date(2021, 8, 24),
			condition: "foggy",
			temp: 30,
		},
		{
			key: Math.random(),
			day: "Wednesday",
			date: new Date(2021, 8, 25),
			condition: "sunny",
			temp: 37,
		},
		{
			key: Math.random(),
			day: "Thursday",
			date: new Date(2021, 8, 26),
			condition: "broken clouds",
			temp: 32,
		},
		{
			key: Math.random(),
			day: "Friday",
			date: new Date(2021, 8, 27),
			condition: "light rain",
			temp: 28,
		},
	],
};
function App() {
	const [weather, setWeather] = useState({});
	useEffect(() => {
		const api = "c5b4c9dc27c71a130b107e8edb8da7ac";
		const url = `https://api.openweathermap.org/data/2.5/onecall?lat=37.34&lon=-121.89&units=metric&exclude=current,minutely,alerts&appid=${api}`;
		axios.get(url).then((res) => {
			const weatherPoints = res.data;
			setWeather(()=> weatherPoints);
		});
	}, []);
  const dailies = weather.daily
  const hourlies = weather.hourly
  console.log(hourlies[0])
	return (
		<div className="App">
			<header className="App-header">
				<div>
					<h1 className="App-forecast-header">5-Day Forecast</h1>
				</div>
			</header>
			<div>
				<h1>{weeklyWeather.location}</h1>
				<div className="weather-cards">
					{weeklyWeather.days.map((day) => {
						return (
							<Card>
								<h2>{day.day}</h2>
								<h2>{day.date.getDate()}</h2>
								<h2>{day.temp} Deg C</h2>
								<h2>{day.condition}</h2>
							</Card>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default App;
