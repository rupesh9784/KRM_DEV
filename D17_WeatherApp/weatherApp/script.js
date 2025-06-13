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

const tempEle = document.querySelector(".temperature");

function showOnDisplay(data){
      const ntemp = data.current.temp_c +"°";
      tempEle.textContent = ntemp;
     
}



async function fetchInformAbtWeather(location){
    const url = `http://api.weatherapi.com/v1/current.json?key=ce38d2c76e7548b0996171007250706&q=${location}&aqi=yes`
   
    const resp =   await fetch(url);
    if(resp.status == 200){
        const jsData =  await resp.json();
        return jsData;
    }

}