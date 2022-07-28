class OpenWeatherMapService {
  _apiKey = '1ad894dfa08af17efcddbccc4255bf47';
  _api = 'http://api.openweathermap.org/data/2.5';

  getCountries = () => ([
    {
      value: 'MX',
      label: 'Mexico',
    },
    {
      value: 'CP',
      label: 'Colombia',
    },
    {
      value: 'ARG',
      label: 'Argentina',
    },
    {
      value: 'VNZ',
      label: 'Venezuela',
    }
  ]);

  async fetchWeather(country, city) {
    return axios.get(`${this._api}/weather?q=${city},${country}&appid=${this._apiKey}`);
  }

}