const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showWeather);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  
  async function showWeather(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
  
    
    const apiKey = "f3548597b68d84adc634d43be05fd24a";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await axios.get(apiUrl);
      const data = response.data;
  
      const locationElement = document.getElementById("location");
      const conditionElement = document.getElementById("condition");
      const temperatureElement = document.getElementById("temperature");
      const countryElement = document.getElementById("country");
  
      locationElement.textContent = `Location: ${data.name}`;
      conditionElement.textContent = `Condition: ${data.weather[0].description}`;
      temperatureElement.textContent = `Temperature: ${data.main.temp}°C`;
      countryElement.textContent = `Country Code: ${data.sys.country}`;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
