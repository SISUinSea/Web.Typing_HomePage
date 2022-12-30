var cursor = document.getElementById('dynamic');
var index = 0;

function blink(){
    cursor.classList.toggle('active');
}

var stringArray = ["Vanitas Vanitatum", "et Omnia Vanitas"];
var selectedString = stringArray[index++%2];
var selectedCharArray = selectedString.split("");
console.log(selectedString);

function typing(givenCharArray){
    if(givenCharArray.length>0){
        cursor.textContent += givenCharArray.shift();
        setTimeout(typing, 300);
    }
    else {

    }
}

setInterval(blink, 500);
typing(selectedCharArray);

