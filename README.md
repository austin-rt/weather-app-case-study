# [Blue Skies Weather App](https://blue-skies-weather.netlify.app/)

![Blue Skies Weather App Screenshot](/assets/pngs/screenshot.png) Blue Skies Weather App is a simple
and intuitive web application built with TypeScript, React, and Redux. It provides real-time weather
information for various locations, displaying the current weather, temperature, location, time, and
weather conditions. Additionally, it offers a three-day forecast with high and low temperatures and
weather conditions.

## Demo

You can try out the Blue Skies Weather App in its
[live deployement](https://blue-skies-weather.netlify.app) or on CodeSandbox:

[![Launch CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/github/austin-rt/weather-app-case-study/codesandbox)

## Features

- Current weather information including temperature, location, time, and weather conditions.
- Three-day forecast with high and low temperatures and weather conditions.
- Search functionality to find weather information for specific locations.
- Responsive design for seamless usage across different devices.

## Known Issues

- There is an obvious Layout shift on first load if the user has previously granted permission. The
  conditional rendering of the Loading screen blips before the API call is finished. This could be
  solved by leveraging React's suspense component, but I didn't have time to rewrite the API call to
  use SWR. The most likely solution would be convert to Nextjs and take advantage of the built in
  data fetching.

## Technologies Used

- TypeScript for building a statically-typed application.
- React for building the user interface.
- Redux for managing the application state.
- [OpenWeather API](https://openweathermap.org/api) to fetch weather data.
- [ip-api.com](https://ip-api.com/) as a backup to retrieve the user's location based on IP address.

## Usage

To use the Blue Skies Weather App, simply visit the following link:

[Blue Skies Weather App](https://blue-skies-weather.netlify.app/)

Please note that the app requires your permission to access your geolocation information. In case
you deny the access or it's unavailable, the app will fallback to using your IP address for location
information. And if you have location services disabled for the browser, the search functionality is
still available.

## Planning Materials

- [Wireframes](https://www.figma.com/file/NrVqaEbVWiLQs9yaJasUOk/Wireframe?type=design&node-id=77%3A432&t=doj7MJLXzZ15xiGQ-1)

## Credits

The Blue Skies Weather App was developed by [Austin Taylor](https://github.com/austin-rt).
