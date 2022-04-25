import React from "react";
import "./Rentals.css";
import { Link } from "react-router-dom";
import logo from "../images/airbnbRed.png";
import { ConnectButton, Icon, Button } from "web3uikit";
import { useLocation } from "web3uikit/node_modules/react-router";

const Rentals = () => {
  const { state: searchFilters } = useLocation();
  const rentalsList = [
    {
      attributes: {
        city: "Nairobi",
        unoDescription: "3 Guests • 2 Beds • 2 Rooms",
        dosDescription: "Wifi • Kitchen • Living Area",
        imgurl: "https://ipfs.moralis.io:2053/ipfs/QmS3gdXVcjM72JSGH82ZEvu4D7nS6sYhbi5YyCw8u8z4pE/media/3",
        lat: "",
        long: "",
        name: "Appartment in CBD",
        pricePerDay_decimal: "3"
      }
    }
  ];

  return (
    <>
    <hr className="line"/>
     <div className="topBanner">
        <div>
          <Link to="/">
            <img className="logo" src={logo} alt="logo"></img>
          </Link>
        </div>
        <div className="searchReminder">
          <div className="filter">{searchFilters.destination}</div>
          <div className="vl" />
          <div className="filter">
            {`
           ${searchFilters.checkIn.toLocaleString("default", {
             month: "short",
           })} 
           ${searchFilters.checkIn.toLocaleString("default", {
             day: "2-digit",
           })} 
           - 
           ${searchFilters.checkOut.toLocaleString("default", {
             month: "short",
           })} 
           ${searchFilters.checkOut.toLocaleString("default", {
             day: "2-digit",
           })}
          `}
          </div>
          <div className="vl" />
          <div className="filter">{searchFilters.guests} Guest</div>
          <div className="searchFiltersIcon">
            <Icon fill="#ffffff" size={20} svg="search" />
          </div>
        </div>
        <div className="lrContainers">
          <ConnectButton />
        </div>
      </div>
    </>
  );
};

export default Rentals;
