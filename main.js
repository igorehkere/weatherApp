const input = document.getElementById('input');
const search = document.getElementById('search-icon');
const grad = document.getElementById('grad');
const speed = document.getElementById('speedWind');
const humproc = document.getElementById('humproc');
const day = document.getElementById('day');
const dayWeek = document.getElementById('dayWeek');
const time = document.getElementById('time')
search.addEventListener('click', async (event) => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const city = input.value;
    if (city === '' || city === undefined) {
        alert('Введите название города')
        return
    }
    const info = await getFetch(city);
    grad.textContent = info.temperature;
    speed.textContent = info.wind;
    humproc.textContent = `${Math.trunc(Math.random()*100)}%`
    console.log(info);
    const date = new Date();
    dayWeek.textContent = `${days[date.getDay() - 1]}`
    time.textContent = `${date.getHours()}:${date.getMinutes()}`
    day.textContent = `${date.getDate()}th Jun 26`;
})
async function getFetch(city) {
    const prom = await fetch(`https://goweather.herokuapp.com/weather/${city}`);
    const finalprom = await prom.json();
    return finalprom;
}





// варианты: ['Haze', 'Patchy rain nearby', 'Clear ', 'Partly cloudy ', 
// 'Mist', 'Overcast ', 'Cloudy ', 'Light drizzle', 'Light rain', 
// 'Moderate rain', 'Sunny', 'Cloudy', 'Freezing fog', 'Heavy snow', 
// 'Moderate snow', 'Light snow', 'Light freezing rain', 'Light rain shower', 
// 'Partly cloudy', 'Freezing drizzle']