import { AnimationString } from '../../types/animations';
import { ANIMATIONS } from './constants';

export const generateCustomDate = (): CustomDate => {
  const dateObj = new Date();
  return {
    day: dateObj.toLocaleDateString('en-US', { weekday: 'long' }),
    hour: dateObj.toLocaleTimeString([], { hour: 'numeric' }),
  };
};

export const addAnimationString = (data: Weather): WeatherWithAnimationString => {
  const code: WeatherConditionCode = data.current.condition.code as WeatherConditionCode;
  const isDay = data.current.is_day;
  let animationString: AnimationString | undefined;

  const animationMap = new Map<WeatherConditionCode, AnimationString>([
    [1000, isDay ? ANIMATIONS.SUNNY : ANIMATIONS.CLEAR_NIGHT],
    [1003, isDay ? ANIMATIONS.PARTLY_CLOUDY : ANIMATIONS.CLEAR_NIGHT],
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
