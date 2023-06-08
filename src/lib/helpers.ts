export const convertToCustomDate = (date: string): CustomDate => {
  const dateObj = new Date(date);
  return {
    day: dateObj.toLocaleDateString('en-US', { weekday: 'short' }),
    hour: dateObj.toLocaleTimeString([], { hour: 'numeric' }),
  };
};
