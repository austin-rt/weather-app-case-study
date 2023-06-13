export enum API {
  BASE_URL = 'https://api.weatherapi.com/v1',
  CURRENT = 'current.json',
  SEARCH = 'search.json',
  FORECAST = 'forecast.json',
  IP_FALLBACK = 'http://ip-api.com/json/?fields=61439',
}

export const ANIMATIONS: Record<string, AnimationString> = {
  CLOUDY_NIGHT: 'cloudyNight',
  FOG: 'fog',
  MIST: 'mist',
  CLEAR_NIGHT: 'clearNight',
  PARTLY_CLOUDY: 'partlyCloudy',
  PARTLY_SHOWER: 'partlyShower',
  RAIN: 'rain',
  RAINY_NIGHT: 'rainyNight',
  SNOW: 'snow',
  SNOWY_SUN: 'snowySun',
  SNOWY_NIGHT: 'snowyNight',
  STORM: 'storm',
  STORM_SHOWERS: 'stormShowers',
  SUNNY: 'sunny',
  THUNDER: 'thunder',
  WINDY: 'windy',
  LOADING: 'loading',
};

export const enum LOTTIE_CHILD {
  CURRENT_WEATHER = 'currentWeather',
  FORECAST = 'forecast',
}
