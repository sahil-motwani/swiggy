import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://img.freepik.com/premium-vector/fast-food-delivery-vector-logo_1012247-128.jpg?w=2000"
          alt="logo"
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ restaurant }) => {
  const { name, rating, costForTwo, cuisines, locationInfo, mediaFiles } = restaurant?.info;
  return (
    <div className="res-card">
      <img
        src={"https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"+mediaFiles[0].url} 
        alt="res-logo"
        className="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo} stars</h4>
      <h4>{rating.value} stars</h4>
      <h4>{locationInfo.distanceString}</h4>
    </div>
  );
};

const Body = () => {
  const restaurants = require("./res-list.json");
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurants.map((res) => (
          <RestaurantCard key={res.info.id} restaurant={res} />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
