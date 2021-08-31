import Card from "../UI/Card";

function toWeekDay(dt) {
	return new Date(dt * 1000).toLocaleString("default", { weekday: "long" });
}

function toMonth(dt) {
	return new Date(dt * 1000).toLocaleString("default", { month: "short" });
}

function Daily(props) {
	
	return (
		<div className="App">
			<header className="App-header">
				<div>
					<h1 className="App-forecast-header">5-Day Forecast</h1>
				</div>
			</header>
			<div>
				{/* <h1>{Weekly.location}</h1> */}
				<h1>{props.weather.timezone}</h1>
				<div className="weather-cards">
					{props.weather.daily &&
						props.weather.daily.map((day, ind) => {
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
