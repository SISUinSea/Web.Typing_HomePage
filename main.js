var cursor = document.getElementById("dynamic");


function cursorON(){
    cursor.classList.remove('disabled');
}
function toggle(){
    cursor.classList.toggle('disabled');
}

var index = true;
function selectingString (){
    var stringArray = ["Vanitas Vanitatum", "et Omnia Vanitas."];
    var seletedString = stringArray[index++%2];
    var seletedCharArray = seletedString.split("");
    return seletedCharArray;
}

function typing(charArray){
    if(charArray.length > 0){
        cursor.textContent += charArray.shift();
        setTimeout(function(){
            typing(charArray);
        }, 200);
    } else {
        var blink = setInterval(toggle, 500);
        setTimeout(function(){
            clearInterval(blink);
            cursorON();
            cursor.textContent = "";
            typing(selectingString());
        }, 3000);
    }
}




typing(selectingString());