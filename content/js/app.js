let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let input = document.querySelector("input");
let temp = document.querySelector(".temp");
let city = document.querySelector(".city");
let weather = document.querySelector(".weather");
let hiLow = document.querySelector(".hi-low");
let date = document.querySelector(".date");

input.addEventListener("keyup", (e) => {
  let inputVal = input.value.toLowerCase();
  if (e.keyCode === 13) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=eecc6992f4fa2ebd4ccc3e779748b2cd`
    )
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((respopne) => {
        console.log(respopne);
        let dateNew = new Date();

        console.log(dateNew.getDay());

        console.log(dateNew.getMonth());
        console.log(dateNew.getDate());

        let find = days.find((item, i) => i == dateNew.getDay());
        let findM = months.find((item, i) => i == dateNew.getMonth());

        console.log(find);

        console.log(findM);

        
        let tempConvert = respopne.main.temp - 273.15;
        temp.innerHTML = "";
        temp.innerHTML = Math.floor(tempConvert) + "°c";
        city.innerHTML = "";
        city.innerHTML = respopne.name + ` ,${respopne.sys.country}`;
        weather.innerHTML = "";
        weather.innerHTML = respopne.weather[0].main;
        hiLow.innerHTML = "";
        let tempMax = Math.floor(respopne.main.temp_max - 273.15);
        let tempMin = Math.floor(respopne.main.temp_min - 273.15);
        hiLow.innerHTML = `${tempMin} / ${tempMax}`;
        date.innerHTML = "";
        date.innerHTML = `${find} ${dateNew.getDate()} ${findM} ${dateNew.getFullYear()}`;
      })
      .catch(() => {
        alert("Please Enter Correct City or Country");
      })
      .finally(() => {
        input.value = "";
      });
  }
});
