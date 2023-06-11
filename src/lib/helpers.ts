export const generateCustomDate = (): CustomDate => {
  const dateObj = new Date();
  return {
    day: dateObj.toLocaleDateString('en-US', { weekday: 'short' }),
    hour: dateObj.toLocaleTimeString([], { hour: 'numeric' }),
  };
};

// move to apiHelpers file?
export const addAnimationString = (data: Weather): WeatherWithAnimationString => {
  let animationString: AnimationString = null;
  switch (data.current.condition.code) {
    default:
      animationString = 'Sunny';
      break;
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
