const currentDate = new Date();

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const dayOfWeek = currentDate.getDay();

const currentDayElement = document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
);

currentDayElement.textContent = dayNames[dayOfWeek];

function UTCTime() {
  const currentTime = new Date();
  const hours = currentTime.getUTCHours().toString().padStart(2, "0");
  const minutes = currentTime.getUTCMinutes().toString().padStart(2, "0");
  const seconds = currentTime.getUTCSeconds().toString().padStart(2, "0");
  const formattedTime = `${hours}:${minutes}:${seconds}`;

  const utcTimeElement = document.querySelector(
    '[data-testid="currentUTCTime"]'
  );
  utcTimeElement.textContent = formattedTime;
}
UTCTime();

setInterval(UTCTime, 1000);
