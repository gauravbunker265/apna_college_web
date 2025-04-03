
document.addEventListener("DOMContentLoaded", function() {
    const apikey = "5f287f305d75469e94f190430253003";
    const apiurl = "http://api.weatherapi.com/v1/current.json";

    const searchBox = document.querySelector(".search-box");
    const searchButton = document.querySelector("button");
    const weatherTemp = document.querySelector(".weather-temp");
    const weatherDesc = document.querySelector(".weather-desc");
    const locationElem = document.querySelector(".location");
    const dateDayName = document.querySelector(".date-dayname");
    const dateDay = document.querySelector(".date-day");
    const humidityElem = document.querySelector(".humidity .value");
    const windElem = document.querySelector(".wind .value");
    const percipitationElem = document.querySelector(".percipitation .value");
    const weatherIcon = document.querySelector(".weather-container i");

    function fetchWeather(city) {
        fetch(`${apiurl}?key=${apikey}&q=${city}&aqi=no`)
            .then(response => response.json())
            .then(data => updateWeatherUI(data))
            .catch(() => alert("City Not Found!"));
    }

    function updateWeatherUI(data) {
        const { location, current } = data;
        locationElem.textContent = location.name;
        weatherTemp.textContent = `${Math.round(current.temp_c)}°C`;
        weatherDesc.textContent = current.condition.text;
        humidityElem.textContent = `${current.humidity}%`;
        windElem.textContent = `${current.wind_kph} km/h`;
        percipitationElem.textContent = `${current.precip_mm} mm`;
        weatherIcon.className = getWeatherIcon(current.condition.text);
        updateDate();
    }

    function getWeatherIcon(condition) {
        const icons = {
            "Sunny": "fa-solid fa-sun icon",
            "Partly cloudy": "fa-solid fa-cloud-sun icon",
            "Cloudy": "fa-solid fa-cloud icon",
            "Overcast": "fa-solid fa-cloud icon",
            "Mist": "fa-solid fa-smog icon",
            "Patchy rain possible": "fa-solid fa-cloud-showers-heavy icon",
            "Rain": "fa-solid fa-cloud-rain icon",
            "Snow": "fa-solid fa-snowflake icon",
            "Thunderstorm": "fa-solid fa-poo-storm icon"
        };

        return icons[condition] || "fa-solid fa-cloud";
    }

    function updateDate() {
        const now = new Date();
        const options = { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' };
        dateDayName.textContent = now.toLocaleDateString('en-US', { weekday: 'long' });
        dateDay.textContent = now.toLocaleDateString('en-US', options).split(',')[1];
    }

    searchButton.addEventListener('click', () => {
        const city = searchBox.value.trim();
        if (city) fetchWeather(city);
    });

    searchBox.addEventListener('keypress', (e) => {
        if (e.key === "Enter") {
            const city = searchBox.value.trim();
            if (city) fetchWeather(city);
        }
    });

    fetchWeather("jaipur");
});



















// document.addEventListener("DOMContentLoaded",function(){
//     const apikey ="5f287f305d75469e94f190430253003";
//     const apiurl = "https://api.weatherapi.com/v1/current.json";

//     const searchBox = document.querySelector(".search-box");
//     const searchButton = document.querySelector("button");
//     const weatherTemp = document.querySelector(".weather-temp");
//     const weatherDesc = document.querySelector(".weather-desc");
//     const locationElem = document.querySelector(".location");
//     const dateDayName = document.querySelector(".date-dayname");
//     const dateDay =document.querySelector(".date-day");
//     const humidityElem =document.querySelector(".humidity .value");
//     const windElem =document.querySelector(".wind .value");
//     const percipitationElem =document.querySelector(".percipitation .value");
//     const weatherIcon =document.querySelector(".weather-container i");

//     // console.log(weatherIcon);

//     function fetchWeather(city){
//         fetch(`${apiurl}?key=${apikey}&q=${city}&aqi=no`)
//             .then(response => response.json())
//             .then(data => updateWeatherUI(data))
//             .catch(()=>alert("City Not Found!"));
//     }


    
//     function updateWeatherUI(data){
//         const {location,current} =data;
//         locationElem.textContent =location.name;
//         weatherTemp.textContent = `${Math.round(current.temp_c)}°C`;
//         weatherDesc.textContent = current.condition.text;
//         humidityElem.textContent = `${current.humidity}%`;
//         windElem.textContent = `${current.wind_kph} km/h`;
//         percipitationElem.textContent= `${current.precip_mm} mm`;
//         weatherIcon.className =getWeatherIcon(current.condition.text);
//         updateDate();



//         // console.log(location.name)
//         // console.log(current.temp_c)
//         // console.log(`${Math.round(current.temp_c)}°C`)
//     }

//     function getWeatherIcon(condition){
//         const icons= {
//             "Sunny": "fa-solid fa-sun icon",
//             "Partly cloudy": "fa-solid fa-cloud-sun icon",
//             "Cloudy": "fa-solid fa-cloud icon",
//             "Overcast": "fa-solid fa-cloud icon",
//             "Mist": "fa-solid fa-smog icon",
//             "Patchy rain possible": "fa-solid fa-cloud-showers-heavy icon",
//             "Rain": "fa-solid fa-cloud-rain icon",
//             "Snow": "fa-solid fa-snowflake icon",
//             "Thunderstorm": "fa-solid fa-poo-storm icon"
//         }

//         return icons[condition] || "fa-solid fa-cloud"
//     }

//     function updateDate(){
//         const now = new Date();
//         const options = {weekday : 'long',day : 'numeric', month: 'short', year: 'numeric'};
//         dateDayName.textContent = now.toLocaleDateString('en-US', {weekday: 'lond'});
//         dateDay.textContent = now.toLocaleDateString('en-US', options).split(',')[1];
//     }

//     searchButton.addEventListener('click',()=>{
//         const city =searchBox.value.trim();
//         if(city) fetchWeather(city);

//     });

//     searchBox.addEventListener('keypress',(e)=>{
//         if(e.key=="Enter") {
//             const city =searchBox.value.trim();
//             if(city) fetchWeather(city);
//         }
//     })

//     // fetchWeather("jaipur")
// });