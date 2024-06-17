/* let now = new Date();

document.write(" 현재 년도는 " + now.getFullYear(), "<br>");
document.write(" 현재 월은 " + (now.getMonth() + 1, "<br>"));
document.write(" 현재 날짜는 " + now.getDate(), "<br>");
document.write(" 현재 요일은 " + now.getDay(), "<br>");
document.write(" 현재 시는 " + now.getHours(), "<br>");
document.write(" 현재 분은 " + now.getMinutes(), "<br>");
document.write(" 현재 초는 " + now.getSeconds(), "<br>");

switch (now.getDay()) {
  case 0:
    document.write(" 현재 요일은 일요일입니다.<br>");
    break;
  case 1:
    document.write(" 현재 요일은 월요일입니다.<br>");
    break;
  case 2:
    document.write(" 현재 요일은 화요일입니다.<br>");
    break;
  case 3:
    document.write(" 현재 요일은 수요일입니다.<br>");
    break;
  case 4:
    document.write(" 현재 요일은 목요일입니다.<br>");
    break;
  case 5:
    document.write(" 현재 요일은 금요일입니다.<br>");
    break;
  case 6:
    document.write(" 현재 요일은 금요일입니다.<br>");
    break;
  case 7:
    document.write(" 현재 요일은 토요일입니다.<br>");
    break;

  default:
    document.write("무슨 요일이죠?");
}

const days = ["일", "월", "화", "수", "목", "금", "토"];

document.write("현재 요일은 " + days[now.getDay()] + "요일입니다.<br>"); */

// console.log(days.length);

let nums = [1, 2, 3];
let chars = ["a", "b", "c", "d"];

let numsChars = nums.concat(chars);
console.log(numsChars);
let charsNums = chars.concat(nums);
console.log(charsNums);

console.log(nums.join());
console.log(chars.join("/"));

nums.push(4, 5);
console.log(nums);

nums.unshift(0);
console.log(nums);

nums.pop(2);
console.log(nums);

nums.shift();
console.log(nums);

nums.splice(3, 2);
console.log(nums);

nums.splice(3, 1, 6);
console.log(nums);

let result1 = nums.slice(2, 4);
console.log(result1);
console.log(nums);
