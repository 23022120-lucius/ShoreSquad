// ShoreSquad App JS

document.addEventListener('DOMContentLoaded', () => {
  // Join button interaction
  const joinBtn = document.getElementById('join-btn');
  if (joinBtn) {
    joinBtn.addEventListener('click', () => {
      alert('Thanks for joining a cleanup! Stay tuned for more features.');
    });
  }

  // Fetch and display 4-day weather forecast from NEA API
  async function loadWeatherForecast() {
    const weatherInfo = document.getElementById('weather-info');
    if (!weatherInfo) return;
    // Show loading spinner
    weatherInfo.classList.add('loading');
    weatherInfo.innerHTML = '<div class="spinner" aria-label="Loading weather"></div>';
    try {
      const response = await fetch('https://api.data.gov.sg/v1/environment/4-day-weather-forecast');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      const forecasts = data.items[0].forecasts;
      let html = '<div class="forecast-grid">';
      forecasts.forEach(day => {
        html += `
          <div class="forecast-day">
            <div class="forecast-date">${day.date}</div>
            <div class="forecast-forecast">${day.forecast}</div>
            <div class="forecast-temp">${day.temperature.low}\u2013${day.temperature.high}\u00b0C</div>
          </div>
        `;
      });
      html += '</div>';
      weatherInfo.classList.remove('loading');
      weatherInfo.innerHTML = html;
    } catch (e) {
      // Show error message with retry option
      weatherInfo.classList.remove('loading');
      weatherInfo.innerHTML = `<div style="color:var(--coral);font-weight:bold;">Unable to load weather forecast.<br><button id='retry-weather' style='margin-top:0.5rem;'>Retry</button></div>`;
      const retryBtn = document.getElementById('retry-weather');
      if (retryBtn) retryBtn.onclick = loadWeatherForecast;
    }
  }
  loadWeatherForecast();

  // Placeholder: Map integration
  const mapContainer = document.getElementById('map-container');
  if (mapContainer) {
    mapContainer.textContent = 'Map will appear here.';
    // TODO: Integrate interactive map
  }

  // Accessibility: Keyboard navigation for nav
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('keyup', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        link.click();
      }
    });
  });
});