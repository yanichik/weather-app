import Card from "../UI/Card";
import { useEffect, useState } from "react";
import axios from "axios";
function toWeekDay(dt) {
	return new Date(dt * 1000).toLocaleString("default", { weekday: "long" });
}

function toMonth(dt) {
	return new Date(dt * 1000).toLocaleString("default", { month: "short" });
}

function Daily(props) {
	const [dailyWeather, setDailyWeather] = useState({});
	const urlDaily = `https://api.openweathermap.org/data/2.5/onecall?lat=37&lon=-121&units=metric&&exclude=current,hourly,minutely,alerts&appid=${props.api}`;
	useEffect(() => {
		axios.get(urlDaily).then((res) => {
			const weatherPoints = res.data;
			setDailyWeather(() => weatherPoints);
		});
	});
	return (
		<div className="App">
			<header className="App-header">
				<div>
					<h1 className="App-forecast-header">5-Day Forecast</h1>
				</div>
			</header>
			<div>
				{/* <h1>{Weekly.location}</h1> */}
				<h1>{dailyWeather.timezone}</h1>
				<div className="weather-cards">
					{dailyWeather.daily &&
						dailyWeather.daily.map((day, ind) => {
							if (ind < 5) {
								return (
									<div onClick={props.onHourly} key={day.dt}>
										<div key={day.dt}>
											<Card className="Card">
												<h2>{toWeekDay(day.dt)}</h2>
												<h2>
													{toMonth(day.dt)} {new Date(day.dt * 1000).getDate()},{" "}
													{new Date(day.dt * 1000).getFullYear()}
												</h2>
												<h2>{day.temp.day} Deg C</h2>
												<h2>{day.weather[0].description}</h2>
											</Card>
										</div>
									</div>
								);
							} else {
								return null;
							}
						})}
				</div>
			</div>
		</div>
	);
}

export default Daily;
