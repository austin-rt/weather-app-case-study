// animation types are in /types/animations.ts due to ANIMATION enum being used as AnimationType definition

type Weather = {
  location: UserLocation;
  current: CurrentWeather;
};

type CurrentWeather = {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: WeatherCondition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
};

type WeatherConditionCode =
  | 1000
  | 1003
  | 1006
  | 1009
  | 1030
  | 1063
  | 1066
  | 1069
  | 1072
  | 1087
  | 1114
  | 1117
  | 1135
  | 1147
  | 1150
  | 1153
  | 1168
  | 1171
  | 1180
  | 1183
  | 1186
  | 1189
  | 1192
  | 1195
  | 1198
  | 1201
  | 1204
  | 1207
  | 1210
  | 1213
  | 1216
  | 1219
  | 1222
  | 1225
  | 1237
  | 1240
  | 1243
  | 1246
  | 1249
  | 1252
  | 1255
  | 1258
  | 1261
  | 1264
  | 1273
  | 1276
  | 1279
  | 1282;

type WeatherCondition = {
  code: WeatherConditionCode;
  text:
    | 'Sunny'
    | 'Clear'
    | 'Partly cloudy'
    | 'Cloudy'
    | 'Overcast'
    | 'Mist'
    | 'Patchy rain possible'
    | 'Patchy snow possible'
    | 'Patchy sleet possible'
    | 'Patchy freezing drizzle possible'
    | 'Thundery outbreaks possible'
    | 'Blowing snow'
    | 'Blizzard'
    | 'Fog'
    | 'Freezing fog'
    | 'Patchy light drizzle'
    | 'Light drizzle'
    | 'Freezing drizzle'
    | 'Heavy freezing drizzle'
    | 'Patchy light rain'
    | 'Light rain'
    | 'Moderate rain at times'
    | 'Moderate rain'
    | 'Heavy rain at times'
    | 'Heavy rain'
    | 'Light freezing rain'
    | 'Moderate or heavy freezing rain'
    | 'Light sleet'
    | 'Moderate or heavy sleet'
    | 'Patchy light snow'
    | 'Light snow'
    | 'Patchy moderate snow'
    | 'Moderate snow'
    | 'Patchy heavy snow'
    | 'Heavy snow'
    | 'Ice pellets'
    | 'Light rain shower'
    | 'Moderate or heavy rain shower'
    | 'Torrential rain shower'
    | 'Light sleet showers'
    | 'Moderate or heavy sleet showers'
    | 'Light snow showers'
    | 'Moderate or heavy snow showers'
    | 'Light showers of ice pellets'
    | 'Moderate or heavy showers of ice pellets'
    | 'Patchy light rain with thunder'
    | 'Moderate or heavy rain with thunder'
    | 'Patchy light snow with thunder'
    | 'Moderate or heavy snow with thunder';
  icon: string;
};

type WeatherConditionWithAnimationString = WeatherCondition & {
  animationString: AnimationString;
};

type CurrentWeatherWithAnimationString = CurrentWeather & {
  condition: WeatherConditionWithAnimationString;
};

type WeatherWithAnimationString = Weather & {
  current: CurrentWeatherWithAnimationString;
};

type UserLocation = {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
};

interface UserLocationWithCoordinatesString extends Partial<UserLocation> {
  coordinates: string;
}

interface SearchQueryLocation extends Partial<UserLocation> {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

type CustomDate = {
  day: string;
  hour: number;
  localtime: string;
};

type IpData = {
  status: string;
  country: string;
  countryCode: string;
  region: string;
  regionName: string;
  city: string;
  zip: string;
  lat: number;
  lon: number;
  timezone: string;
  isp: string;
  org: string;
  as: string;
  query: string;
};

type Forecast = {
  forecastday: Forecastday[];
};

type ForecastWithAnimationString = {
  forecastday: ForecastDayWithAnimationString[];
};

type ForecastDayWithAnimationString = Forecastday & {
  day: DayWithAnimationString;
};

type DayWithAnimationString = Day & {
  condition: WeatherConditionWithAnimationString;
};

type Forecastday = {
  date: string;
  date_epoch: number;
  day: Day;
  astro: Astro;
  hour: Hour[];
};

type Hour = {
  time_epoch: number;
  time: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  will_it_rain: number;
  chance_of_rain: number;
  will_it_snow: number;
  chance_of_snow: number;
  vis_km: number;
  vis_miles: number;
  gust_mph: number;
  gust_kph: number;
  uv: number;
};

type Astro = {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: string;
  moon_illumination: string;
  is_moon_up: number;
  is_sun_up: number;
};

type Day = {
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  avgtemp_c: number;
  avgtemp_f: number;
  maxwind_mph: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  totalprecip_in: number;
  totalsnow_cm: number;
  avgvis_km: number;
  avgvis_miles: number;
  avghumidity: number;
  daily_will_it_rain: number;
  daily_chance_of_rain: number;
  daily_will_it_snow: number;
  daily_chance_of_snow: number;
  condition: WeatherCondition;
  uv: number;
};
