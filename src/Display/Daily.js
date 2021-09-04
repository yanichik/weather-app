import Card from "../UI/Card";
import "./Daily.css";
function toWeekDay(dt) {
	return new Date(dt * 1000).toLocaleString("default", { weekday: "long" });
}

function toMonth(dt) {
	return new Date(dt * 1000).toLocaleString("default", { month: "short" });
}

// function getHourlyData(dt){
// 	convert parameter to url
// 	axios request for url
// 	callback to set state

// }

function Daily(props) {
	return (
		<div className="App">
			<header className="App-header">
				<div>
					<h1>5-Day Forecast</h1>
				</div>
			</header>
			<div>
				{/* <h1>{Weekly.location}</h1> */}
				<h1>
					Timezone:{" "}
					{props.weather.timezone && props.weather.timezone.split("/")[1]}
				</h1>
				<div className="weather-cards">
					{props.weather.daily &&
						props.weather.daily.map((day, ind) => {
							if (ind < 5) {
								return (
									<div onClick={() => props.onHourly(day.dt)} key={day.dt}>
										<Card className="Card">
											{/* <h2 style={{ padding: "0px", margin: "0px" }}> */}
											<h2 className="close-in-dist">{toWeekDay(day.dt)}</h2>
											<h3 className="close-in-dist">
												{toMonth(day.dt)} {new Date(day.dt * 1000).getDate()},{" "}
												{new Date(day.dt * 1000).getFullYear()}
											</h3>
											{/* &#8451; => deg C */}
											<h2>{Math.round(day.temp.day)} &#8451;</h2>
											<img
												className="close-in-dist"
												src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
												alt="icon depicts current weather"
											/>
											<h4 className="close-in-dist">
												{day.weather[0].description}
											</h4>
										</Card>
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
