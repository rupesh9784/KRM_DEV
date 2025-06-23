import { useState } from "react";
import "./App.css";
import MyComp from "./Component/MyComp";
function App() {
  const [val, setVal] = useState("");
  const [weatherObj, setWeatherObj] = useState({
    temp: "25.2°",
    location: "Pune",
    date: "2025-06-08",
    time: "22:06",
    src: "--",
    condition: "--",
  });

  const handleInput = (e) => {
    setVal(e.target.value);
  };
  const handleClick = async () => {
    if (val !== "") {
      const data = await fetchInformAbtWeather(val);
      const ntemp = data.current.temp_c ;
      const location = data.location.name;
      const timeData = data.location.localtime;
      const [date, time] = timeData.split(" ");
      const iconLink = data.current.condition.icon;
      const condition = data.current.condition.text;
      let newObj = {
        "temp": ntemp,
        "location": location,
        "date": date,
        "time": time,
        "src": iconLink,
        "condition": condition,
      };
    
      setWeatherObj(newObj);
      setVal("")

    } else {
      alert("invalid location");
      return;
    }
  };

  async function fetchInformAbtWeather(location) {
    const url = `http://api.weatherapi.com/v1/current.json?key=ce38d2c76e7548b0996171007250706&q=${location}&aqi=yes`;

    const resp = await fetch(url);
    if (resp.status == 200) {
      const jsData = await resp.json();
      return jsData;
    } else {
      alert("location is invalid");
    }
  }

  return (
    <>
      <header className="h-[150px] bg-[#2c3e50] flex justify-center items-center">
        <div className="w-[60%] flex justify-between" id="input-container">
          <input
            onChange={handleInput}
            value={val}
            className="text-[1.1rem] outline-none text-white bg-transparent py-[1rem] px-0 border-b-2 border-solid border-white width-[80%]"
            type="text"
            id="search-input"
            placeholder="Enter city name"
          />
          <button
            onClick={handleClick}
            className="bg-[#44ad96] text-white text-[1.1rem] border-none cursor-pointer py-4 px-8"
            id="search"
          >
            Search
          </button>
        </div>
      </header>
      <main className="h-[800px] text-white flex justify-center items-center bg-[#01161E]">
        <div
          className="flex gap-4 items-center h-[5rem]"
          id="weather-container"
        >
          <div className="text-3xl" id="temperature">
            25.2°
          </div>

          <div id="location-date">
            <div id="location">{weatherObj.location}</div>
            <span id="time">{weatherObj.time}</span>
            <span id="date">{weatherObj.date}</span>
          </div>
          <div id="weather-state">
            <img src={weatherObj.src} alt="icon" />
            <div id="condition">{weatherObj.condition}</div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
