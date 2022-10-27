import axios from 'axios';

class WeatherService {
  http = axios.create({
    baseURL: process.env.REACT_APP_OPENWEATHER_API,
  });

  async getCurrentWeather(search) {
    const response = await this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API}`
    );
    return response.data;
  }
}

export default new WeatherService();
