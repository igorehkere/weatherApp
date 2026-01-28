const input = document.getElementById('input');
const search = document.getElementById('search-icon');
const grad = document.getElementById('grad');
const speed = document.getElementById('speedWind');
const humproc = document.getElementById('humproc');
const day = document.getElementById('day');
const dayWeek = document.getElementById('dayWeek');
const time = document.getElementById('time');
const wph = document.getElementById('weathPhoto');
const nameW = document.getElementById('weatherName');
search.addEventListener('click', async (event) => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const sunny = ['clear', 'overcast' , 'sunny'];
    const cloudy = ['cloudy' , 'partly cloudy'];
    const rainy = ['patchy rain nearby', 'light drizzle', 'light rain', 'moderate rain', 'light freezing rain', 'light rain shower', 'rain'];
    const foggy = ['haze', 'mist', 'freezing fog'];
    const snow = ['heavy snow', 'moderate snow', 'light snow', 'freezing drizzle', 'snow', 'light snow shower', 'blowing snow', 'snow shower'];
    const city = input.value;
    if (city === '' || city === undefined) {
        alert('Введите название города')
        return
    }
    wph.setAttribute('src', 'photo/download3.gif');
    wph.setAttribute('height', '64px');
    wph.setAttribute('width', '64px');
    try {
        const info = await getFetch(city);
        const description = info.description.toLowerCase();
        if (sunny.includes(description)) {
            wph.setAttribute('src', 'photo/icons/Sunny.png');
            wph.setAttribute('width', '64px');
            wph.setAttribute('height', '64px');
            nameW.textContent = 'Sunny';
        } else if (rainy.includes(description)) {
            wph.setAttribute('src', 'photo/icons/Rainy1.png');
            wph.setAttribute('width', '102px');
            wph.setAttribute('height', '74px');
            nameW.textContent = 'Rainy';
        } else if (cloudy.includes(description)) {
            wph.setAttribute('src', 'photo/icons/Cloudy.png');
            wph.setAttribute('width', '102px');
            wph.setAttribute('height', '74px');
            nameW.textContent = 'Cloudy';
        } else if (foggy.includes(description)) {
            wph.setAttribute('src', 'photo/icons/Fog.png');
            wph.setAttribute('width', '102px');
            wph.setAttribute('height', '74px');
            nameW.textContent = 'Fog';
        } else if (snow.includes(description)) {
            wph.setAttribute('src', 'photo/icons/Snow.png');
            wph.setAttribute('width', '102px');
            wph.setAttribute('height', '74px');
            nameW.textContent = 'Snow';
        } else {
            wph.setAttribute('src', 'photo/cloudy.png');
            nameW.textContent = 'unknown';
        }
        console.log(description);
        grad.textContent = info.temperature;
        speed.textContent = `Wind: ${info.wind}`;
        humproc.textContent = `Hum: ${Math.trunc(Math.random()*100)}%`
        console.log(info); 
    } catch(err) {
        nameW.textContent = 'ERROR';
        wph.setAttribute('src', 'photo/error.png')
        wph.setAttribute('width', '82px');
        wph.setAttribute('height', '74px');
    } finally {
        const date = new Date();
        dayWeek.textContent = `${days[date.getDay() - 1]}`
        time.textContent = `${date.getHours()}:${date.getMinutes()}`
        day.textContent = `${date.getDate()}th Jun 26`;
    }
    
    
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
// 'Partly cloudy', 'Freezing drizzle', 'rain']