export const url = "https://wft-geo-db.p.rapidapi.com/v1/geo";
export const geoApiOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_X_RAPIDAPI_KEY,
    "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
  },
};

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/";

export const WEATHER_API_KEY = import.meta.env.VITE_API_KEY;


console.log(WEATHER_API_KEY)