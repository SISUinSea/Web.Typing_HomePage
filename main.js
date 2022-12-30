var cursor = document.getElementById("dynamic");
// #dynamic은 active 대신 disabled라는 class명을 가집니다.
// cursorON 함수는 disabled class 이름을 없앱니다. 이에 따라 커서가 지속해서 나타납니다.
function cursorON(){
    cursor.classList.remove('disabled');
}
// toggle은 disable class name을 지웠다 넣었다 합니다. 27번째 줄에서 setInterval과 함께 사용해 blink 기능을 구현합니다.
function toggle(){
    cursor.classList.toggle('disabled');
}

var index = 0;
function selectingString (){
    // typing 되는 문자는 두 가지 입니다.
    var stringArray = ["Vanitas Vanitatum", "et Omnia Vanitas."];
    // 배열에 접근하는 index가 짝수이면(2로 나누어 떨어지면) 첫 번째,
    // 홀수이면 (2로 나눴을 때 나머지가 1이면) 두 번째 요소를 선택합니다.
    var seletedString = stringArray[index++%2];
    // seletedString을 글자 하나하나로 나눕니다.
    var seletedCharArray = seletedString.split("");
    // 결과를 리턴합니다. 리턴값은 typing 함수가 사용합니다.
    return seletedCharArray;
}

/** 타이핑 효과를 구현합니다. 타이핑 도중 커서는 깜빡이지 않지만, 타이핑이 끝나면 깜빡입니다. 마치 현실 커서처럼요! */
function typing(charArray){
    if(charArray.length > 0){
        cursor.textContent += charArray.shift();
        setTimeout(function(){
            typing(charArray);
        }, 200);
    } else {
        var blink = setInterval(toggle, 500);
        
        setTimeout(function(){
            while(cursor.length > 0) {
                setTimeout(function(){
                    cursor.textContent.slice(0, -1);
                }, 100);
            }
            clearInterval(blink);
            cursorON();
            cursor.textContent = "";
            typing(selectingString());
        }, 3000);
    }
}




typing(selectingString());