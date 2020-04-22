import React from "react";

const Country = (props) => {
  return (
    <div className="countries-item">
      <img src={props.country.flag} alt={props.country.name} style={{ width: "100%" }} />
      <p>{props.country.name}</p>
    </div>
  );
};


export default Country;
