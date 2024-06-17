스타일(css)
<body>...</body>

선택자 {속성명:속성값;}

선택자 (하위선택자까지는 외워두면 좋음)
- 전체 선택자 (*)
- 태그(요소)선택자 (지정한 태그)
- 클래스 선택자 (같은 태그 다른 스타일)
- 아이디 선택자 
- 그룹 선택자 (쉼표로 구분. 쭉 나열. 동일하게 스타일 줄때)
- 하위(자손) 선택자 (아래에 있는 지정한 태그) div input
- 하위(자식) 선택자 (바로 하위에 있는) div > input
- 속성 선택자

글꼴관련 스타일
font-family : 글자체/ 저작권 조심; fontFamily(js)
font-size : px, em, rem, cm, mm, inch, %
16px = 1em = 1rem
em : 상위에 있는걸 기준
rem : 최상위에 있는걸 기준
72pt = 1inch = 2.54cm
12pt != 12px  ; fontSize(js)
font-weight : 굵기 100 ~ 900 단위수 없이 사용. thin ~ bolder
기본값 400 : normal
font-style : 기울임꼴 italic