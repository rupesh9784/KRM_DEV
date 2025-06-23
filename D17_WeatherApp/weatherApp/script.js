const searchBtn = document.querySelector("#search");
const searchInput = document.querySelector(".search-input");


searchBtn.addEventListener("click" ,async function(){
   
   const location = searchInput.value;
   console.log(location);
   if(location !== "") {
   
      const data = await fetchInformAbtWeather(location);
      console.log(data);
      if(data != null){
          showOnDisplay(data);
      }

    }
    searchInput.value = "";
});

const tempElem = document.querySelector(".temperature");
const locationElem = document.querySelector(".location");
const emojiImg = document.querySelector(".emoji");
const timeElem = document.querySelector(".time");
const dayElem = document.querySelector(".Day");
const dateElem = document.querySelector(".Date");
const conditionElem = document.querySelector(".condition");


function showOnDisplay(data){
    const ntemp = data.current.temp_c +"°C";
    const location = data.location.name;
    const timeData = data.location.localtime;
    const [date, time] = timeData.split(" ");
    const iconLink = data.current.condition.icon;
    const condition = data.current.condition.text;

    tempElem.textContent = ntemp;
    locationElem.textContent = location;
    emojiImg.src = iconLink;
    dateElem.innerText = date;
    timeElem.innerText = time;
    conditionElem.innerText = condition;
}



async function fetchInformAbtWeather(location){
    const url = `http://api.weatherapi.com/v1/current.json?key=ce38d2c76e7548b0996171007250706&q=${location}&aqi=yes`
   
    const resp =   await fetch(url);
    if(resp.status == 200){
        const jsData =  await resp.json();
        return jsData;
    } else {
        alert("location is invalid");
    }

}