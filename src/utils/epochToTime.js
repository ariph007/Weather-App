export const epochToTime = (unixTimestamp) => {
  const date = new Date(unixTimestamp * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const time = `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;

  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

  return time;
};
