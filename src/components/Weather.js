import React from "react";

const Weather = props => (
  <div className="mt-4 ">
    {props.day && (
      <span className="moment_key ">
        <p>{props.day}</p>
      </span>
    )}
    {props.date && (
      <span className="moment_key">
        <p>{props.date}</p>
      </span>
    )}
    {props.temperature && (
      <span className="temperature_key">
        <p style={{ color: "#f16051" }}>{props.temperature + "\u00b0"}</p>
      </span>
    )}
    {props.city && props.country && (
      <p className="city_key">
        {props.city}, {props.country}
      </p>
    )}
    {props.description && (
      <p className="description_key">{props.description}</p>
    )}
    {props.iconUrl && <img className="icon_key" src={props.iconUrl} alt="" />}
    {props.error && <p>{props.error}</p>}
  </div>
);
export default Weather;
