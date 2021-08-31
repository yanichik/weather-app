import "./App.css";
// import Card from "./UI/Card";
import { useState } from "react";
import Daily from "./Display/Daily";
import Hourly from "./Display/Hourly";

const api = "c5b4c9dc27c71a130b107e8edb8da7ac";
function App() {
	// const [weather, setWeather] = useState({});
	const [type, setType] = useState("daily");

	function hourlyViewHandler() {
		setType("hourly");
	}

	function dailyViewHandler() {
		setType("daily");
	}

	if (type === "daily") {
		return <Daily onHourly={hourlyViewHandler} api={api}/>;
	} else if (type === "hourly") {
		return <Hourly onDaily={dailyViewHandler} api={api}/>;
	}
}

export default App;