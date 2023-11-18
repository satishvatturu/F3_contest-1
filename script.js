let dB = [];

let defaultObj = {
    hours : 0,
    minutes : 0,
    seconds : 0,
    id : 0
}

let h = document.querySelector(".hrs");
let m = document.querySelector(".mins");
let s = document.querySelector(".secs");
let setBtn = document.querySelector(".set-btn>button");
let timerList = document.querySelector(".timer-list");

h.addEventListener("input", (e)=>{
    defaultObj.hours = h.value;
})

m.addEventListener("change",(e)=>{
    if(m.value <= 0 || m.value > 60)
    {
        alert("Give the minutes value in between 1 and 60");
        m.value = null;
    }
    else
    {
        defaultObj.minutes = m.value;
    }
})

s.addEventListener("change", (e)=>{
    if(s.value <= 0 || s.value > 60)
    {
        alert("Give the seconds value in between 1 and 60");
        s.value = null;
    }
    else
    {
        defaultObj.seconds = s.value;
    }
})


setBtn.addEventListener("click", (e)=>{
    if(defaultObj.hours != 0 || defaultObj.minutes != 0 || defaultObj.seconds != 0)
    {
        defaultObj.id++;
        let obj = structuredClone(defaultObj);
        dB.push(obj);
        createCountdownDiv();
        setValues();
    }
    s.value = null;
    m.value = null;
    h.value = null;
    console.log(dB);
})

defaultObj.hours = 0;
defaultObj.minutes = 0;
defaultObj.seconds = 0;

function createCountdownDiv() {
    let countDown_Div = document.createElement("div");
    countDown_Div.className = "countdown-div";

    let timeLeft = document.createElement("div");
    timeLeft.className = "time-left";
    timeLeft.innerHTML = "<p>Time Left :</p>";
    countDown_Div.appendChild(timeLeft);

    let countDown = document.createElement("div");
    countDown.className = "countdown";

    let span1 = document.createElement("span");
    span1.className = "count";
    span1.id = "hours";
    span1.innerText = "00";
    countDown.appendChild(span1);

    let span2 = document.createElement("span");
    span2.className = "dot";
    span2.innerText = ":";
    countDown.appendChild(span2);

    let span3 = document.createElement("span");
    span3.className = "count";
    span3.id = "mins"
    span3.innerText = "00";
    countDown.appendChild(span3);

    let span4 = document.createElement("span");
    span4.className = "dot";
    span4.innerText = ":";
    countDown.appendChild(span4);

    let span5 = document.createElement("span");
    span5.className = "count";
    span5.id = "secs";
    span5.innerText = "00";
    countDown.appendChild(span5);

    countDown_Div.appendChild(countDown);

    let deleteBtnDiv = document.createElement("div");
    deleteBtnDiv.className = "delete-Btn";
    deleteBtnDiv.innerHTML = "<button>Delete</button>";
    countDown_Div.appendChild(deleteBtnDiv);

    timerList.appendChild(countDown_Div);
}

function setValues() {
    let hours = document.querySelector("#hours");
    let mins = document.querySelector("#mins");
    let secs = document.querySelector("#secs");

    hours.innerText = h.value < 10 ? `0${h.value}` : h.value;
    mins.innerText = m.value < 10 ? `0${m.value}` : m.value;
    secs.innerText = s.value < 10 ? `0${s.value}` : s.value;
}