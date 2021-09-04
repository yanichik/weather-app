import Card from "../UI/Card";

function toWeekDay(dt) {
	return new Date(dt * 1000).toLocaleDateString("default", { weekday: "long" });
}

function toMonth(dt) {
	return new Date(dt * 1000).toLocaleString("default", { month: "short" });
}

function toHour(dt) {
	return new Date(dt * 1000)
		.toLocaleDateString("default", { hour: "2-digit", minute: "2-digit" })
		.split(",")[1];
}

function Hourly(props) {
	return (
		<div className="App">
			<header className="App-header">
				<div>
					<h1>Hourly Forecast</h1>
				</div>
			</header>
			<div>
				{/* <h1>{Weekly.location}</h1> */}
				<h1>{props.weather.city && props.weather.city.name}</h1>
				<div className="weather-cards">
					{props.weather.list &&
						props.weather.list.map((hour, ind) => {
							if (ind >= props.dayIndex * 8 && ind < props.dayIndex * 8 + 6) {
								return (
									<div onClick={props.onDaily} key={hour.dt}>
										<div key={hour.dt}>
											<Card>
												<h2 style={{ padding: "0px", margin: "0px" }}>
													{toWeekDay(hour.dt)}
												</h2>
												<h3 style={{ padding: "0px", margin: "0px" }}>
													{toMonth(hour.dt)}{" "}
													{new Date(hour.dt * 1000).getDate()},{" "}
													{new Date(hour.dt * 1000).getFullYear()}
												</h3>
												<h3>{toHour(hour.dt)}</h3>
												<h2>{Math.round(hour.main.temp)} &#8451;</h2>
												<img
													src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
													alt="icon depicts current weather"
												/>
												<h4>{hour.weather[0].description}</h4>
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

export default Hourly;
