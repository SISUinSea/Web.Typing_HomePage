let target = document.querySelector('#dynamic');

function blink(){
    target.classList.toggle("active");
}
setInterval(blink, 500);

function randomString(){
    let stringArr = ["Learn HTML", "Learn CSS", "Learn JavaScript", "Learn Python"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("");
    return selectStringArr;
}



function dynamic (randomArr){
    console.log(randomArr);
    if(randomArr.length>0){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        }, 110);
    }
    else {
        setTimeout(resetTyping, 3000);
    }
}

function resetTyping(){
    target.textContent = "";
    
    dynamic(randomString());
}

dynamic(randomString());