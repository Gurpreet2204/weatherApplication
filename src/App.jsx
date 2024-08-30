import { useState } from "react";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import "./App.css";
import Forecast from "./components/forecast/Forecast";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Search from "./components/search/search";

function App() {
  const [currentWeather, setcurrentWeather] = useState(null);
  const [forecast, setforecast] = useState(null);
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    Promise.all([currentWeatherFetch, forecastFetch]).then(async (Response) => {
      const weatherResponse = await Response[0].json();
      const forecastResponse = await Response[1].json();
      setcurrentWeather({city:searchData.label, ...weatherResponse});
      setforecast({city:searchData.label,...forecastResponse});
    })
    .catch((err) => {
        console.log(err)
    })
  };
  console.log(currentWeather)
  console.log(forecast)
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast}/>}
    </div>
  );
}

export default App;
