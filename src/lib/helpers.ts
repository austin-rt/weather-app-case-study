import { AnimationString } from '../../types/animations';
import { ANIMATIONS } from './constants';

export const generateCustomDate = (): CustomDate => {
  const dateObj = new Date();
  return {
    day: dateObj.toLocaleDateString('en-US', { weekday: 'short' }),
    hour: dateObj.getHours(),
    localtime: dateObj.toLocaleTimeString([], { hour: 'numeric' }),
  };
};

export const addAnimationString = (data: Weather): WeatherWithAnimationString => {
  const code: WeatherConditionCode = data.current.condition.code as WeatherConditionCode;
  const isDay = data.current.is_day;
  let animationString: AnimationString | undefined;
  const animationMap = new Map<WeatherConditionCode, AnimationString>([
    [1000, isDay ? ANIMATIONS.SUNNY : ANIMATIONS.CLEAR_NIGHT],
    [1003, isDay ? ANIMATIONS.PARTLY_CLOUDY : ANIMATIONS.CLOUDY_NIGHT],
    [1006, isDay ? ANIMATIONS.WINDY : ANIMATIONS.CLEAR_NIGHT],
    [1009, isDay ? ANIMATIONS.WINDY : ANIMATIONS.CLEAR_NIGHT],
    [1030, ANIMATIONS.MIST],
    [1135, ANIMATIONS.FOG],
    [1063, isDay ? ANIMATIONS.PARTLY_SHOWER : ANIMATIONS.RAINY_NIGHT],
    [1069, isDay ? ANIMATIONS.PARTLY_SHOWER : ANIMATIONS.RAINY_NIGHT],
    [1150, isDay ? ANIMATIONS.PARTLY_SHOWER : ANIMATIONS.RAINY_NIGHT],
    [1153, isDay ? ANIMATIONS.PARTLY_SHOWER : ANIMATIONS.RAINY_NIGHT],
    [1180, isDay ? ANIMATIONS.PARTLY_SHOWER : ANIMATIONS.RAINY_NIGHT],
    [1183, isDay ? ANIMATIONS.PARTLY_SHOWER : ANIMATIONS.RAINY_NIGHT],
    [1186, isDay ? ANIMATIONS.PARTLY_SHOWER : ANIMATIONS.RAINY_NIGHT],
    [1066, isDay ? ANIMATIONS.SNOWY_SUN : ANIMATIONS.SNOWY_NIGHT],
    [1114, ANIMATIONS.SNOW],
    [1117, ANIMATIONS.SNOW],
    [1213, isDay ? ANIMATIONS.SNOWY_SUN : ANIMATIONS.SNOWY_NIGHT],
    [1216, isDay ? ANIMATIONS.SNOWY_SUN : ANIMATIONS.SNOWY_NIGHT],
    [1219, isDay ? ANIMATIONS.SNOWY_SUN : ANIMATIONS.SNOWY_NIGHT],
    [1222, ANIMATIONS.SNOW],
    [1225, ANIMATIONS.SNOW],
    [1237, ANIMATIONS.RAIN],
    [1072, isDay ? ANIMATIONS.STORM_SHOWERS : ANIMATIONS.RAINY_NIGHT],
    [1168, isDay ? ANIMATIONS.STORM_SHOWERS : ANIMATIONS.RAINY_NIGHT],
    [1171, isDay ? ANIMATIONS.STORM_SHOWERS : ANIMATIONS.RAINY_NIGHT],
    [1189, isDay ? ANIMATIONS.STORM_SHOWERS : ANIMATIONS.RAINY_NIGHT],
    [1198, isDay ? ANIMATIONS.STORM_SHOWERS : ANIMATIONS.RAINY_NIGHT],
    [1195, isDay ? ANIMATIONS.STORM_SHOWERS : ANIMATIONS.RAINY_NIGHT],
    [1201, isDay ? ANIMATIONS.STORM_SHOWERS : ANIMATIONS.RAINY_NIGHT],
    [1204, isDay ? ANIMATIONS.STORM_SHOWERS : ANIMATIONS.RAINY_NIGHT],
    [1207, isDay ? ANIMATIONS.STORM_SHOWERS : ANIMATIONS.RAINY_NIGHT],
    [1210, isDay ? ANIMATIONS.STORM_SHOWERS : ANIMATIONS.RAINY_NIGHT],
    [1240, isDay ? ANIMATIONS.STORM_SHOWERS : ANIMATIONS.RAINY_NIGHT],
    [1243, isDay ? ANIMATIONS.STORM_SHOWERS : ANIMATIONS.RAINY_NIGHT],
    [1246, isDay ? ANIMATIONS.STORM_SHOWERS : ANIMATIONS.RAINY_NIGHT],
    [1249, isDay ? ANIMATIONS.STORM_SHOWERS : ANIMATIONS.RAINY_NIGHT],
    [1252, isDay ? ANIMATIONS.STORM_SHOWERS : ANIMATIONS.RAINY_NIGHT],
    [1087, ANIMATIONS.THUNDER],
    [1273, isDay ? ANIMATIONS.STORM_SHOWERS : ANIMATIONS.STORM],
    [1276, isDay ? ANIMATIONS.STORM_SHOWERS : ANIMATIONS.STORM],
    [1279, isDay ? ANIMATIONS.STORM_SHOWERS : ANIMATIONS.STORM],
    [1282, isDay ? ANIMATIONS.STORM_SHOWERS : ANIMATIONS.STORM],
  ]);

  animationString = animationMap.get(code);

  if (!animationString) {
    animationString = ANIMATIONS.LOADING;
  }

  return {
    ...data,
    current: {
      ...data.current,
      condition: {
        ...data.current.condition,
        animationString,
      },
    },
  };
};

export const addAnimationStringToForecast = (data: Forecast): ForecastWithAnimationString => {
  const forecastWithAnimationString: ForecastDayWithAnimationString[] = data.forecastday.map(
    forecast => {
      const code: WeatherConditionCode = forecast.day.condition.code as WeatherConditionCode;
      let animationString: AnimationString | undefined;
      const animationMap = new Map<WeatherConditionCode, AnimationString>([
        [1000, ANIMATIONS.SUNNY],
        [1003, ANIMATIONS.WINDY],
        [1006, ANIMATIONS.WINDY],
        [1009, ANIMATIONS.WINDY],
        [1030, ANIMATIONS.MIST],
        [1135, ANIMATIONS.FOG],
        [1063, ANIMATIONS.RAIN],
        [1069, ANIMATIONS.RAIN],
        [1150, ANIMATIONS.RAIN],
        [1153, ANIMATIONS.RAIN],
        [1180, ANIMATIONS.RAIN],
        [1183, ANIMATIONS.RAIN],
        [1186, ANIMATIONS.RAIN],
        [1066, ANIMATIONS.SNOW],
        [1114, ANIMATIONS.SNOW],
        [1117, ANIMATIONS.SNOW],
        [1213, ANIMATIONS.SNOW],
        [1216, ANIMATIONS.SNOW],
        [1219, ANIMATIONS.SNOW],
        [1222, ANIMATIONS.SNOW],
        [1225, ANIMATIONS.SNOW],
        [1237, ANIMATIONS.RAIN],
        [1072, ANIMATIONS.STORM],
        [1168, ANIMATIONS.STORM],
        [1171, ANIMATIONS.STORM],
        [1189, ANIMATIONS.STORM],
        [1195, ANIMATIONS.STORM],
        [1198, ANIMATIONS.STORM],
        [1201, ANIMATIONS.STORM],
        [1204, ANIMATIONS.STORM],
        [1207, ANIMATIONS.STORM],
        [1210, ANIMATIONS.STORM],
        [1240, ANIMATIONS.STORM],
        [1243, ANIMATIONS.STORM],
        [1246, ANIMATIONS.STORM],
        [1249, ANIMATIONS.STORM],
        [1252, ANIMATIONS.STORM],
        [1087, ANIMATIONS.THUNDER],
        [1273, ANIMATIONS.STORM],
        [1276, ANIMATIONS.STORM],
        [1279, ANIMATIONS.STORM],
        [1282, ANIMATIONS.STORM],
      ]);
      animationString = animationMap.get(code);
      if (!animationString) {
        animationString = ANIMATIONS.LOADING;
      }
      return {
        ...forecast,
        day: {
          ...forecast.day,
          condition: {
            ...forecast.day.condition,
            animationString,
          },
        },
      };
    },
  );
  return { forecastday: forecastWithAnimationString };
};
