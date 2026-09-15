let examDate = document.getElementById("examDate")
let totalPages = document.getElementById("totalPages")
let pagesPerHour = document.getElementById("pagesPerHour")
let btn = document.getElementById("btn")
let result = document.getElementById("result")

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
    let daysLeft = Math.ceil(timeLeft / (24 * 60 * 60 * 1000));

    let studyDays = Math.ceil(daysLeft * 0.75);
    let reviewDays = daysLeft - studyDays;

    let studyHours = pagesValue / speedValue;
    let dailyHours = studyHours / studyDays;
    let pagesPerDay = pagesValue / studyDays;

    if (dailyHours > 24) {
        result.textContent = "Oops 😭 You don't have enough time!";
    }
    else {
        result.innerHTML =
            "<h2>You got this! 🎉</h2>" +
            "<p>You have <strong>" + daysLeft + " days</strong> until your exam.</p>" +
            "<p>📚 Study <strong>" + Math.ceil(dailyHours) + " hours a day</strong> for <strong>" + studyDays + " days</strong>.</p>" +
            "<p>📝 You'll have <strong>" + reviewDays + " days left for review!</strong></p>" +
            "<p>📖 Try to finish around <strong>" + Math.ceil(pagesPerDay) + " pages a day</strong>.</p>";
        }
});





