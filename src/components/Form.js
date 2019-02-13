import React from "react";
import PropTypes from "prop-types";

const Form = props => (
  <form onSubmit={props.getWeather}>
    <input type="text" name="city" placeholder="City..." />
    <input type="text" name="country" placeholder="Country..." />
    <button>Get Weather</button>
  </form>
);

// PropTypes Check
Form.propTypes = {
  getWeather: PropTypes.func.isRequired
};

export default Form;
