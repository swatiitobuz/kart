import React from "react";
import useStyles from "./styles";

const StoreLocation = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>Store Location</h1>
      <div className={classes.location}>
        <div className={classes.mapContainer}>
          <iframe
            src="https://maps.google.com/maps?q=UniversityOfEngineering&Management,New Town, University Area, Plot No. III, B/5, New Town Rd, Action Area III, Newtown, Kolkata, West Bengal 700160&t=&z=15&ie=UTF8&iwloc=B&output=embed"
            title="map"
            className={classes.map}
          ></iframe>
        </div>
        <div className={classes.textContainer}>
          <h2>Address</h2>
          <p>B/3 New Town, New Town Rd, Action Area III, Newtown, Kolkata, West Bengal 700160</p>
          <h2>Phone</h2>
          <p>9876543210</p>
          <h2>Opening Hours</h2>
          <p>Monday - Friday: 9am - 9pm</p>
          <p>Saturday - Sunday: 11am - 5pm</p>
        </div>
      </div>
    </div>
  );
};

export default StoreLocation;
