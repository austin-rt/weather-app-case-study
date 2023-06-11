export const generateCustomDate = (): CustomDate => {
  const dateObj = new Date();
  return {
    day: dateObj.toLocaleDateString('en-US', { weekday: 'short' }),
    hour: dateObj.toLocaleTimeString([], { hour: 'numeric' }),
  };
};

// move to apiHelpers file?
export const addAnimationString = (data: Weather): WeatherWithAnimationString => {
  const code: WeatherConditionCode = data.current.condition.code as WeatherConditionCode;
  const isDay = data.current.is_day;
  let animationString: AnimationString | undefined;

  // const animationMap = new Map<typeof code, AnimationString>([
  const animationMap = new Map<WeatherConditionCode, AnimationString>([
    [1000, isDay ? 'Sunny' : 'Night'],
    [1003, isDay ? 'PartlyCloudy' : 'Night'],
    [1006, isDay ? 'Sunny' : 'Night'],
    [1009, isDay ? 'Sunny' : 'Night'],
    [1030, 'Mist'],
    [1135, 'Mist'],
    [1063, isDay ? 'PartlyShower' : 'RainyNight'],
    [1150, isDay ? 'PartlyShower' : 'RainyNight'],
    [1153, isDay ? 'PartlyShower' : 'RainyNight'],
    [1180, isDay ? 'PartlyShower' : 'RainyNight'],
    [1183, isDay ? 'PartlyShower' : 'RainyNight'],
    [1186, isDay ? 'PartlyShower' : 'RainyNight'],
    [1066, isDay ? 'SnowSun' : 'SnowNight'],
    [1069, isDay ? 'SnowSun' : 'SnowNight'],
    [1114, isDay ? 'SnowSun' : 'SnowNight'],
    [1117, isDay ? 'SnowSun' : 'SnowNight'],
    [1213, isDay ? 'SnowSun' : 'SnowNight'],
    [1216, isDay ? 'SnowSun' : 'SnowNight'],
    [1219, isDay ? 'SnowSun' : 'SnowNight'],
    [1222, isDay ? 'SnowSun' : 'SnowNight'],
    [1225, isDay ? 'SnowSun' : 'SnowNight'],
    [1237, isDay ? 'SnowSun' : 'SnowNight'],
    [1072, isDay ? 'StormShowers' : 'RainyNight'],
    [1168, isDay ? 'StormShowers' : 'RainyNight'],
    [1171, isDay ? 'StormShowers' : 'RainyNight'],
    [1189, isDay ? 'StormShowers' : 'RainyNight'],
    [1198, isDay ? 'StormShowers' : 'RainyNight'],
    [1201, isDay ? 'StormShowers' : 'RainyNight'],
    [1204, isDay ? 'StormShowers' : 'RainyNight'],
    [1207, isDay ? 'StormShowers' : 'RainyNight'],
    [1210, isDay ? 'StormShowers' : 'RainyNight'],
    [1240, isDay ? 'StormShowers' : 'RainyNight'],
    [1243, isDay ? 'StormShowers' : 'RainyNight'],
    [1246, isDay ? 'StormShowers' : 'RainyNight'],
    [1249, isDay ? 'StormShowers' : 'RainyNight'],
    [1252, isDay ? 'StormShowers' : 'RainyNight'],
    [1087, 'Thunder'],
    [1273, isDay ? 'StormShowers' : 'Storm'],
    [1276, isDay ? 'StormShowers' : 'Storm'],
    [1279, isDay ? 'StormShowers' : 'Storm'],
    [1282, isDay ? 'StormShowers' : 'Storm'],
  ]);

  animationString = animationMap.get(code);

  if (!animationString) {
    animationString = 'Loading';
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
