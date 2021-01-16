const clock = document.querySelector(".js-clock");

function getTime() {
  const xmasDay = new Date("2021-12-24:00:00:00");
  const current = new Date();
  const count = xmasDay - current;

  const D = 1000 * 60 * 60 * 24;
  const H = 1000 * 60 * 60;
  const M = 1000 * 60;
  const S = 1000;

  const Day = Math.floor(count / D);
  const Hour = Math.floor(count / H) - Day * 24;
  const Min = Math.floor(count / M) - Day * 24 * 60 - Hour * 60;
  const Sec =
    Math.floor(count / S) - Day * 24 * 60 * 60 - Hour * 60 * 60 - Min * 60;

  clock.innerText = `${Day < 10 ? `0${Day}` : `${Day}`}Day ${
    Hour < 10 ? `0${Hour}` : `${Hour}`
  }Hour ${Min < 10 ? `0${Min}` : `${Min}`}Min ${
    Sec < 10 ? `0${Sec}` : `${Sec}`
  }Sec`;
}
function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
