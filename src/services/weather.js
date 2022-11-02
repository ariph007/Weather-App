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

  async getDailyWeather(search) {
    const response = await this.http.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${search}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API}`
    );
    let temp = response.data.list;
    let sums = {},
      counts = {},
      results = [],
      name;
    for (var i = 0; i < temp.length; i++) {
      name = temp[i].dt_txt.split(' ')[0];
      if (!(name in sums)) {
        sums[name] = 0;
        counts[name] = 0;
      }
      sums[name] += temp[i].main.temp;
      counts[name]++;
    }

    for (name in sums) {
      results.push({
        name: name,
        temp: Number((sums[name] / counts[name]).toFixed(1)),
      });
    }
    return results;
  }
}

export default new WeatherService();
