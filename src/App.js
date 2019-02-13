import React from "react";
import "./App.css";

import Form from "./components/Form";
import Weather from "./components/Weather";
import moment from "moment";

const API_KEY = "74a0d65d1017ee174d9493121f8fca0b";

class App extends React.Component {
  state = {
    day: undefined,
    date: undefined,
    temperature: undefined,
    city: undefined,
    country: undefined,
    description: undefined,
    iconUrl: undefined,
    error: undefined
  };
  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`
    );
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        day: moment().format("dddd"),
        date: moment().format("MMMM Do YYYY"),
        temperature: Math.round(data.main.temp),
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        iconUrl: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
        error: ""
      });
    } else {
      this.setState({
        day: undefined,
        date: undefined,
        temperature: undefined,
        city: undefined,
        country: undefined,
        description: undefined,
        iconUrl: undefined,
        error: "Please Enter City & Country"
      });
    }
  };
  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="form-container">
              <Form getWeather={this.getWeather} />
              <Weather
                day={this.state.day}
                date={this.state.date}
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                description={this.state.description}
                iconUrl={this.state.iconUrl}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
