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

type WeatherCondition = {
  code:
    | '1000'
    | '1003'
    | '1006'
    | '1009'
    | '1030'
    | '1063'
    | '1066'
    | '1069'
    | '1072'
    | '1087'
    | '1114'
    | '1117'
    | '1135'
    | '1147'
    | '1150'
    | '1153'
    | '1168'
    | '1171'
    | '1180'
    | '1183'
    | '1186'
    | '1189'
    | '1192'
    | '1195'
    | '1198'
    | '1201'
    | '1204'
    | '1207'
    | '1210'
    | '1213'
    | '1216'
    | '1219'
    | '1222'
    | '1225'
    | '1237'
    | '1240'
    | '1243'
    | '1246'
    | '1249'
    | '1252'
    | '1255'
    | '1258'
    | '1261'
    | '1264'
    | '1273'
    | '1276'
    | '1279'
    | '1282';
  text:
    | 'Sunny'
    | 'Clear'
    | 'Partly cloudy'
    | 'Partly cloudy'
    | 'Cloudy'
    | 'Cloudy'
    | 'Overcast'
    | 'Overcast'
    | 'Mist'
    | 'Mist'
    | 'Patchy rain possible'
    | 'Patchy rain possible'
    | 'Patchy snow possible'
    | 'Patchy snow possible'
    | 'Patchy sleet possible'
    | 'Patchy sleet possible'
    | 'Patchy freezing drizzle possible'
    | 'Patchy freezing drizzle possible'
    | 'Thundery outbreaks possible'
    | 'Thundery outbreaks possible'
    | 'Blowing snow'
    | 'Blowing snow'
    | 'Blizzard'
    | 'Blizzard'
    | 'Fog'
    | 'Fog'
    | 'Freezing fog'
    | 'Freezing fog'
    | 'Patchy light drizzle'
    | 'Patchy light drizzle'
    | 'Light drizzle'
    | 'Light drizzle'
    | 'Freezing drizzle'
    | 'Freezing drizzle'
    | 'Heavy freezing drizzle'
    | 'Heavy freezing drizzle'
    | 'Patchy light rain'
    | 'Patchy light rain'
    | 'Light rain'
    | 'Light rain'
    | 'Moderate rain at times'
    | 'Moderate rain at times'
    | 'Moderate rain'
    | 'Moderate rain'
    | 'Heavy rain at times'
    | 'Heavy rain at times'
    | 'Heavy rain'
    | 'Heavy rain'
    | 'Light freezing rain'
    | 'Light freezing rain'
    | 'Moderate or heavy freezing rain'
    | 'Moderate or heavy freezing rain'
    | 'Light sleet'
    | 'Light sleet'
    | 'Moderate or heavy sleet'
    | 'Moderate or heavy sleet'
    | 'Patchy light snow'
    | 'Patchy light snow'
    | 'Light snow'
    | 'Light snow'
    | 'Patchy moderate snow'
    | 'Patchy moderate snow'
    | 'Moderate snow'
    | 'Moderate snow'
    | 'Patchy heavy snow'
    | 'Patchy heavy snow'
    | 'Heavy snow'
    | 'Heavy snow'
    | 'Ice pellets'
    | 'Ice pellets'
    | 'Light rain shower'
    | 'Light rain shower'
    | 'Moderate or heavy rain shower'
    | 'Moderate or heavy rain shower'
    | 'Torrential rain shower'
    | 'Torrential rain shower'
    | 'Light sleet showers'
    | 'Light sleet showers'
    | 'Moderate or heavy sleet showers'
    | 'Moderate or heavy sleet showers'
    | 'Light snow showers'
    | 'Light snow showers'
    | 'Moderate or heavy snow showers'
    | 'Moderate or heavy snow showers'
    | 'Light showers of ice pellets'
    | 'Light showers of ice pellets'
    | 'Moderate or heavy showers of ice pellets'
    | 'Moderate or heavy showers of ice pellets'
    | 'Patchy light rain with thunder'
    | 'Patchy light rain with thunder'
    | 'Moderate or heavy rain with thunder'
    | 'Moderate or heavy rain with thunder'
    | 'Patchy light snow with thunder'
    | 'Patchy light snow with thunder'
    | 'Moderate or heavy snow with thunder'
    | 'Moderate or heavy snow with thunder';
  icon:
    | '113'
    | '116'
    | '119'
    | '122'
    | '143'
    | '176'
    | '179'
    | '182'
    | '185'
    | '200'
    | '227'
    | '230'
    | '248'
    | '260'
    | '263'
    | '266'
    | '281'
    | '284'
    | '293'
    | '296'
    | '299'
    | '302'
    | '305'
    | '308'
    | '311'
    | '314'
    | '317'
    | '320'
    | '323'
    | '326'
    | '329'
    | '332'
    | '335'
    | '338'
    | '350'
    | '353'
    | '356'
    | '359'
    | '362'
    | '365'
    | '368'
    | '371'
    | '374'
    | '377'
    | '386'
    | '389'
    | '392'
    | '395';
};

type AnimationString =
  | 'CloudyNight'
  | 'Foggy'
  | 'Mist'
  | 'Night'
  | 'PartlyCloudy'
  | 'PartlyShower'
  | 'RainyNight'
  | 'Snow'
  | 'SnowNight'
  | 'Storm'
  | 'StormShowers'
  | 'Sunny'
  | 'Thunder'
  | 'Windy'
  | null;

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
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
};

type CustomDate = {
  day: string;
  hour: string;
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
