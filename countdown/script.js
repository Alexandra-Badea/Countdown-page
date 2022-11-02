var countDown = new Date ("Dec 31, 2022 23:59:59").getTime();

var myFunction = setInterval(function() {
    var now = new Date(). getTime();
    var timeLeft = countDown - now;

    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;

    if (timeLeft < 0) {
        clearInterval(myFunction);
        document.querySelector(".clock").innerHTML = "Merry Christmas!";
    }
}, 1000)


document.querySelector(".open").addEventListener("click", e => {
    document.body.classList.add("show-modal");
})
document.querySelector(".close").addEventListener("click", e => {
    document.body.classList.remove("show-modal");
})
document.querySelector(".underlay").addEventListener("click", e => {
    document.body.classList.remove("show-modal");
})