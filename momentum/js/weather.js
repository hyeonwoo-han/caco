
const API_KEY = "3d651c591c9705caa0368348265b5595";


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("you live in ", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json().then(data => {
        const city = document.querySelector("#weather span:nth-child(1)");
        const weather = document.querySelector("#weather span:nth-child(2)");
        const temp = document.querySelector("#weather span:nth-child(3)");

        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
        temp.innerText = data.main.temp;
    }));
}

function onGeoError(positionError){
    alert("Can't find you. No weather for you.");
}

// success function는 GeolocationPosition 
// 객체를 유일한 매개변수로 콜백함수다 
// error function은 GeolocationPositionError
// 객체를 유일한 매개변수로 받는 콜백함수다
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);