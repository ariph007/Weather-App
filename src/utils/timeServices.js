class TimeService {
  getEpochToTime(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const time = `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;

    function padTo2Digits(num) {
      return num.toString().padStart(2, '0');
    }

    return time;
  }

  getDifferentHours(dateTarget) {
    const dateNow = Math.round(new Date().getTime());

    var difference = dateNow - dateTarget;
    var daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
    difference -= daysDifference * 1000 * 60 * 60 * 24;

    var hoursDifference = Math.floor(difference / 1000 / 60 / 60);
    difference -= hoursDifference * 1000 * 60 * 60;

    var minutesDifference = Math.floor(difference / 1000 / 60);
    difference -= minutesDifference * 1000 * 60;

    var secondsDifference = Math.floor(difference / 1000);

    return hoursDifference;
  }
}

export default new TimeService();
