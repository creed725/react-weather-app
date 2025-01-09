export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];

  //Get hours and convert to standard time
  let hours = props.date.getHours();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; //Convert to 12-hour format, replacing 0 with 12

  //Get minutes and pad with leading zero if needed
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes} ${ampm}`;
}
