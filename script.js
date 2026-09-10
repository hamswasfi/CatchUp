let examDate = document.getElementById("examDate")
let totalPages = document.getElementById("totalPages")
let pagesPerHour = document.getElementById("pagesPerHour")
let btn = document.getElementById("btn")
let result = document.getElementById("result")
let welcome = document.getElementById("welcome")
let planner = document.getElementById("planner")
let startBtn = document.getElementById("startBtn")

startBtn.addEventListener("click", function(){
    welcome.style.display = "none"
    planner.style.display = "block"
})

btn.addEventListener("click",function(){
    let examValue = examDate.value
    let pagesValue = Number(totalPages.value)
    let speedValue = Number(pagesPerHour.value)
    
    if (!examValue || pagesValue <= 0 || speedValue <= 0) {
        result.textContent = "Enter the information correctly first 😭";
        return;
    }
    
    let now = new Date()
    let examTime = new Date(examValue)
    let timeLeft = examTime - now;
    if (timeLeft <= 0) {
        result.textContent = "That exam date has already passed 😭";
        return;
    }
    let daysLeft = Math.floor(timeLeft / (24 * 60 * 60 * 1000));
    let hoursLeft = Math.floor((timeLeft % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    let totalHours = timeLeft / (60 * 60 * 1000);
    let studyHours = pagesValue/speedValue;

    let studyTime = totalHours * 0.75;
    let reviewTime = totalHours * 0.25;

    if (studyHours > studyTime) {
        result.textContent = "Oops 😭 You don't have enough time!";
    }
    else{
        let studyDays = studyTime/24;
        let minDailyHours =  studyHours / studyDays;
        let pagesPerDay = pagesValue / studyDays;

    result.innerHTML =
        "<h2>Okay, here's your plan! 🎉</h2>" +
        "<p><strong>You've got:</strong> " + daysLeft + " days and " + hoursLeft + " hours</p>" +
        "<p><strong>You need to study:</strong> " + Math.ceil(minDailyHours) + " hours a day</p>" +
        "<p><strong>Try to finish:</strong> " + Math.ceil(pagesPerDay) + " pages a day</p>" +
        "<p><strong>Don't forget to review:</strong> " + Math.ceil(reviewTime) + " hours</p>";
    }
 });






