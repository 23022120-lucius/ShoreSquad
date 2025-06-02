// ShoreSquad App JS

document.addEventListener('DOMContentLoaded', () => {
  // Join button interaction
  const joinBtn = document.getElementById('join-btn');
  if (joinBtn) {
    joinBtn.addEventListener('click', () => {
      alert('Thanks for joining a cleanup! Stay tuned for more features.');
    });
  }

  // Placeholder: Fetch and display weather info
  const weatherInfo = document.getElementById('weather-info');
  if (weatherInfo) {
    weatherInfo.textContent = 'Loading weather...';
    // TODO: Integrate weather API
  }

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