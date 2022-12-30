let cursor = document.getElementById('dynamic');
let index = 0;

function blink(){
    cursor.classList.toggle('active');
}

let stringArray = ["Vanitas Vanitatum", "et Omnia Vanitas"];

function selectingCharArray(){
    let selectedString = stringArray[(index++)%2];
    let selectedCharArray = selectedString.split("");
    console.log(selectedCharArray);
    return selectedCharArray;
}

function typing(givenCharArray){
    if(givenCharArray.length>0){
        cursor.textContent += givenCharArray.shift();
        setTimeout(
            typing(givenCharArray)
        , 300);
    }
    else {
        cursor.textContent = "";
        setTimeout(typing(selectingCharArray()), 3000);
    }
}

setInterval(blink, 500);
typing(selectingCharArray());

