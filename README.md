# [Blue Skies Weather App](https://blue-skies-weather.netlify.app/)

![Blue Skies Weather App Screenshot](/assets/pngs/screenshot.png)

Blue Skies is a simple and intuitive web application built with TypeScript, React, and Redux. It
provides real-time weather information for the user's current locations, displaying the current
weather, temperature, location, time, and weather conditions. Additionally, it offers a three-day
forecast with high and low temperatures and weather conditions.

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

- Layout shift on first load if permission was previously granted. Loading screen flickers before
  API call finishes. Solution: Consider using SWR fetching with React's Suspense component or
  converting to Next.js for prebuilt data fetch flow.
- Imperfect mobile optimization due to time constraints. No further code changes made after
  deadline.
- Though it's not documented, the API's free teir only allows a three day forecast, inclusive of the
  current day. So instead of filtering out the current day and only showing a two day forecast, I
  left the current day in.
- The data is not recached while the application is running. We could make a fresh API call after a
  certain period of time (2-3 sec for this API) or if performance were an issue, use the
  `watchPosition` method from the geolocation API to only make the call when the position changes.
  However if the user opts to block location services and the app fallsback to the IP address
  method, the user would need to make much larger moves to trigger a location change.
- An accessability pass still needs to be done. We would need to thoroughly optomize with titles,
  aria-labels, roles, and other accessability best practices to ensure the app is fully accessable.

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
