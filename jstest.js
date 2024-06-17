const colNum = 6;
const rowNum = 3;
const users = [
  "김유미",
  "김가영",
  "김은솔",
  "류강민",
  "박민수",
  "박주연",
  "배채정",
  "서민경",
  "양연수",
  "옥찬미",
  "이다은",
  "전보람",
  "전현정",
  "정다겸",
  "추호연",
  "하소영",
  " ",
  " ",
];

document.write("<div class='table'><h2>좌석배정표</h2>");
document.write("<table>");
document.write("<tr>");
for (let r = 0; r < rowNum; r++) {
  for (let c = 1; c <= colNum; c++) {
    let seatNo = Math.floor(Math.random() * 17);

    document.write("<td>" + users[seatNo] + "</td>");
  }
  document.write("</tr>");
}
document.write("</div>");
document.write("</table>");
