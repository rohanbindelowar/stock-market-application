import axios from "axios";
import React, { useEffect } from "react";
import "../styles/Search.css";

const Search = (props) => {
  useEffect(() => {
    if (!props.name) return;

    const fetchStockData = async () => {
      try {
        const response = await axios.get(
          `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${props.name}&interval=5min&apikey=CY0MRTK6R8Q15VGK`
        );

        const timeSeries = response.data["Time Series (5min)"];
        if (!timeSeries) {
          console.error("Time Series (5min) data not found in the API response.");
          return;
        }

        const labels = [];
        const openData = [];
        const closeData = [];
        const highData = [];
        const lowData = [];

        for (const [key, value] of Object.entries(timeSeries)) {
          labels.push(key); // Full timestamp
          openData.push(value["1. open"]);
          highData.push(value["2. high"]);
          lowData.push(value["3. low"]);
          closeData.push(value["4. close"]);
        }

        props.setDayIntervalData({
          labels,
          openData,
          highData,
          lowData,
          closeData,
        });
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    fetchStockData();
  }, [props.name]);

  const handleChange = (e) => {
    props.setName(e.target.value);
  };

  const handleClick = () => {
    if (!props.name.trim()) {
      console.warn("Stock name is empty.");
      return;
    }

    console.log("Fetching stock data for:", props.name);
    props.setName(props.name);
  };

  return (
    <div className="searchWrapper">
      <input
        type="text"
        id="search-bar"
        placeholder="Enter stock symbol (e.g., AAPL)"
        value={props.name}
        onChange={handleChange}
      />
      <button id="search-button" onClick={handleClick}>
        Search
      </button>
    </div>
  );
};

export default Search;
