document.getElementById('pollutionForm').addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission

  const pollutionData = {
      aqi: parseInt(document.getElementById('aqi').value),
      coAqi: parseInt(document.getElementById('coAqi').value),
      ozoneAqi: parseInt(document.getElementById('ozoneAqi').value),
      no2Aqi: parseInt(document.getElementById('no2Aqi').value),
      pm25Aqi: parseInt(document.getElementById('pm25Aqi').value)
  };

  const averageAqi = calculateAverage([
      pollutionData.aqi,
      pollutionData.coAqi,
      pollutionData.ozoneAqi,
      pollutionData.no2Aqi,
      pollutionData.pm25Aqi
  ]);
  const aqiLevel = determineAqiLevel(averageAqi);

  // Display results without backend connection
  document.getElementById('responseMessage').innerText = Average AQI: ${averageAqi}, Level: ${aqiLevel};
});

function calculateAverage(values) {
  const total = values.reduce((acc, value) => acc + value, 0);
  return total / values.length;
}

function determineAqiLevel(aqi) {
  if (aqi >= 0 && aqi <= 50) {
      return 'Good';
  } else if (aqi >= 51 && aqi <= 100) {
      return 'Moderate';
  } else if (aqi >= 101 && aqi <= 150) {
      return 'Unhealthy';
  } else if (aqi >= 151 && aqi <= 200) {
      return 'Unhealthy for Sensitive Groups';
  } else {
      return 'Hazardous';
  }
}