export const getCurrentTime = () => {
  const date = new Date();
  const formatter = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
  });
  return formatter.format(date);
};
