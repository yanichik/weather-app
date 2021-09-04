import { useState, useEffect } from "react";
import Daily from "../Display/Daily";
import Hourly from "../Display/Hourly";
import axios from "axios";

const api = "c5b4c9dc27c71a130b107e8edb8da7ac";
const urlDaily = `https://api.openweathermap.org/data/2.5/onecall?lat=37.337&lon=-121.887&units=metric&&exclude=current,hourly,minutely,alerts&appid=${api}`;
const urlHourly = `https://api.openweathermap.org/data/2.5/forecast?lat=37.337&lon=-121.887&units=metric&appid=${api}`;

function Container(props) {
	const [weather, setWeather] = useState({});
	const [type, setType] = useState("daily");
	const [url, setUrl] = useState(urlDaily);
	const [dayIndex, setDayIndex] = useState();

	useEffect(() => {
		axios.get(url).then((res) => {
			setWeather(() => res.data);
		});
	}, [url]);

	function hourlyViewHandler(dt) {
		setType("hourly");
		setDayIndex(
			weather.daily.findIndex(function (entry, ind) {
				return entry.dt === dt;
			})
		);
		setUrl(urlHourly);
	}

	function dailyViewHandler() {
		setType("daily");
		setUrl(urlDaily);
	}

	if (type === "daily") {
		return (
			<Daily
				className="Daily"
				weather={weather}
				onHourly={(dt) => hourlyViewHandler(dt)}
				api={api}
			/>
		);
	} else if (type === "hourly") {
		return (
			<Hourly
				weather={weather}
				onDaily={dailyViewHandler}
				api={api}
				dayIndex={dayIndex}
			/>
		);
	}
}

export default Container;