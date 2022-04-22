//Câu 1
let evenNumber = document.getElementById('evenNumber');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    for (let i = 4; i <= evenNumber.value; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
})

//Câu 2
let colorCard = document.getElementById('colorCard');

colorCard.addEventListener('mouseover', function() {
    colorCard.style.backgroundColor = "purple"
})

colorCard.addEventListener('mouseout', function() {
    colorCard.style.backgroundColor = "azure"
})

//Câu 3
let triangle = "1"

function numberOneTriangle(){
    for (let i = 0; i < 5; i++) {
        console.log(triangle)
        triangle += "1"
    }
}

//Câu 4
setInterval(changeTime, 1000);

function changeTime(){
    let time = new Date().toLocaleTimeString('en-US', {hour12: false, hour: "numeric", minute: "numeric", second: "numeric"});
    document.getElementById("pTime").innerHTML = time;
}
