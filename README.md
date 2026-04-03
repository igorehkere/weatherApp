# Weather App

A weather app that displays temperature, wind speed, sky conditions, and the current time for any entered city. Data is retrieved from a public API.

## Features

- Search for weather by city name
- Display temperature, wind speed, and humidity
- Change icon and title based on the weather
- Shows the current day of the week, date, and time
- Responsive layout for mobile devices

## Screenshots

### Main page
<img width="2156" height="1199" alt="image" src="https://github.com/user-attachments/assets/aa0aaa28-6f6e-4079-84ed-3951140fda83" />

### Loading page
<img width="2159" height="1193" alt="image" src="https://github.com/user-attachments/assets/68bd40d4-fa88-4f10-880d-1e0b3a2135cf" />

### Result
<img width="2158" height="1202" alt="image" src="https://github.com/user-attachments/assets/d75f558a-72a8-414e-9095-6631b374cc71" />


## Demo

https://cute-cuchufli-0f103b.netlify.app/

## How it works

The user enters a city and clicks the magnifying glass. The app accesses the goweather.herokuapp.com API, retrieves the data, and updates the interface. While loading, a skeleton GIF is displayed.

After receiving a response, the app looks at the weather description and inserts the appropriate icon and text. If the description is not recognized, a standard image and the "unknown" status are shown.

The time and date are taken from the user's local computer.

## Technologies

- HTML5
- CSS3
- JavaScript
- Public API (goweather.herokuapp.com)

## Project Structure

weather-app/
├── index.html
├── styles.css
├── main.js
├── photo/
│ ├── search.png
│ ├── cloudy.png
│ ├── download3.gif
│ ├── error.png
│ ├── wind-icon.png
│ ├── hum-icon.png
│ └── icons/
│ ├── Sunny.png
│ ├── Rainy1.png
│ ├── Cloudy.png
│ ├── Fog.png
│ └── Snow.png
└── README.md

## Launch

1. Download the repository
2. Open index.html in your browser
3. Enter the city name (in Russian or English) and click the magnifying glass icon

The API is free, no key is required.

## Implementation Features

- Humidity is random. The goweather.herokuapp.com API doesn't return humidity, so I added a random number generator from 0 to 100. It's a hack, but it's good enough for a demo.
- Icons are selected based on keywords from the description. The keyword list was compiled manually based on possible API responses. Some weather conditions may not be recognized, and will show "unknown."
- If an error occurs (invalid city, network problems), an ERROR message and an error icon are displayed.

## License

MIT

## Author

Igorehkere
