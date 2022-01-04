console.log("hi");

const apiKey = "4bfb9be525972af1476a7ce235b41dac";

const wrapper = document.querySelector(".wrapper");

const city = document.querySelector(".city");

city.addEventListener("keydown", getWeather);

function getWeather(e) {
  if (e.key == "Enter") {
    if (wrapper.innerHTML != "") {
      wrapper.innerHTML = "";
    }

    getData();
    async function getData() {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=4bfb9be525972af1476a7ce235b41dac`
      );
      let data = await response.json();
      console.log(data);
      let div = document.createElement("div");
      div.classList.add("weather-info-container", "fade-in");
      requestAnimationFrame(() => {
        div.classList.remove("fade-in");
      });

      let html = `<h3 class="city-name">${data.name}</h3>`;
      if (data.weather[0].main == "Clouds") {
        html += `<img src="img/cloudy.png" alt="icon" class="weather-image">`;
      } else if (data.weather[0].main == "Clear") {
        html += `<img src="img/sunny.png" alt="icon" class="weather-image">`;
      } else if (data.weather[0].main == "Snow") {
        html += `<img src="img/snow.png" alt="icon" class="weather-image">`;
      } else if (data.weather[0].main == "Rain") {
        html += `<img src="img/rainy.png" alt="icon" class="weather-image">`;
      } else if (data.weather[0].main == "Drizzle") {
        html += `<img src="img/rainy.png" alt="icon" class="weather-image">`;
      } else if (data.weather[0].main == "Thunderstorm") {
        html += `<img src="img/storm.png" alt="icon" class="weather-image">`;
      } else if (data.weather[0].main == "Mist" || data.weather[0].main == "Fog") {
        html += `<img src="img/fog.png" alt="icon" class="weather-image">`;
      }
      html += `<p class="temperature">${data.main.temp} °C</p>
            <p class="weather-info">${data.weather[0].description}</p>`;

      div.innerHTML = html;
      wrapper.appendChild(div);
    }
  }
}
