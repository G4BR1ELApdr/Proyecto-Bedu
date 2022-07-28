class SearchWeather extends OpenWeatherMapService {
  countrySelect = document.getElementById("country");
  cityInput = document.getElementById("city");

  elements = {
    cityTitle: document.getElementById("cityTitle"),
    temp: document.getElementById("tempText"),
    tempMax: document.getElementById("tempMaxText"),
    tempMin: document.getElementById("tempMinText"),
    sensseTemp: document.getElementById("sensseTemp"),
    container: document.getElementById("resultsContainer"),
    error: document.getElementById("error"),
    loading: document.getElementById("loading"),
  };

  _kelvin = 273.15;

  constructor() {
    super();
    this.loadCountries();
  }

  async searchTime() {
    const {
      cityTitle,
      temp,
      tempMax,
      tempMin,
      sensseTemp,
      container,
      error,
      loading,
    } = this.elements;
    error.classList.add("d-none");
    container.classList.add("d-none");

    loading.classList.remove("d-none");

    try {
      const city = this.cityInput.value;
      const country = this.countrySelect.value;
      const { data } = await this.fetchWeather(country, city);
      const { temp_max, temp_min, feels_like } = data.main;

      cityTitle.innerText = `${city}, ${country}`;

      temp.innerText = this.convertCelsius(temp_max);
      tempMax.innerText = this.convertCelsius(temp_max);
      tempMin.innerText = this.convertCelsius(temp_min);
      sensseTemp.innerText = this.convertCelsius(feels_like);

      container.classList.remove("d-none");
    } catch (e) {
      console.error(e);
      container.classList.add("d-none");
      error.classList.remove("d-none");
    } finally {
      loading.classList.add("d-none");
    }
  }

  loadCountries() {
    const countries = this.getCountries();
    const options = countries.map(this.createCountryElement);
    this.countrySelect.append(...options);
  }

  createCountryElement({ value, label }) {
    const element = document.createElement("option");
    element.value = value;
    element.textContent = label;
    return element;
  }

  convertCelsius = (temp) => parseInt(temp - this._kelvin);
}
(() => {
  const searchWeather = new SearchWeather();

  const searchForm = document.getElementById("searchForm");

  searchForm.addEventListener("submit", (ev) => {
    ev.preventDefault();
    searchWeather.searchTime();
  });
})();
