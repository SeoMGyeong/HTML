let now = new Date();

let firstDay = new Date();

let toNow = now.getTime(); // 오늘까지 지난 시간
let toFirst = firstDay.getTime(); // 첫날까지 지난 시간
let passedTime = toNow - toFirst; // 첫날부터 오늘까지 지난 시간

passedTime = Math.floor(passedTime / (1000 * 60 * 60 * 24));

document.querySelector("#result").innerText = passedTime;

document.querySelector("#currentDay").innerText = now.toLocaleString();

function startDay() {
  const startDayInput = document.querySelector("#startDayInput").value;
  document.querySelector("#startDayDisplay").innerText = startDayInput;
}

// 시작날짜 입력받는 prompt
