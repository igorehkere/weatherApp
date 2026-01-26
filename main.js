try {
    const prom = await fetch('https://goweather.xyz/weather/London');
    const finalprom = await prom.json();
    console.log(finalprom) 
} catch(err) {
    console.log('Ошибка', err)
}

// варианты: ['Haze', 'Patchy rain nearby', 'Clear ', 'Partly Cloudy ', 
// 'Mist', 'Overcast ', 'Cloudy ', 'Light drizzle', 'Light rain', 
// 'Moderate rain', 'Sunny', 'Cloudy', 'Freezing fog', 'Heavy snow', 
// 'Moderate snow', 'Light snow', 'Light freezing rain', 'Light rain shower', 
// 'Partly cloudy']