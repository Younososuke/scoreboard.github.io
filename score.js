let homeCount = 0;
let changeCount = document.getElementById("home--btn")
function plusOne(){
    homeCount += 1;
    changeCount.textContent = homeCount;
}
function plusTwo(){
    homeCount += 2
    changeCount.textContent = homeCount
}
function plusThree(){
    homeCount +=3
    changeCount.textContent = homeCount
}
// guest count
let guestCount = 0;
let changeGuestCount = document.getElementById("guest--btn")
function guestPlusOne(){
    guestCount += 1;
    changeGuestCount.textContent = guestCount;
}
function guestPlusTwo(){
    guestCount += 2
    changeGuestCount.textContent = guestCount;
}
function guestPlusThree(){
    guestCount +=3
    changeGuestCount.textContent = guestCount;
}

function checkWinner() {
    if (homeCount > guestCount) {
        document.getElementById("winner-p").textContent = "Home team is the winner!";
        document.getElementById("home-title").style.color = "green"
        document.getElementById("guest-title").style.color = "red"
    } else if (guestCount > homeCount) {
        document.getElementById("winner-p").textContent = "Guest team is the winner!";
        document.getElementById("guest-title").style.color = "green"
        document.getElementById("home-title").style.color = "red"
    } else {
        document.getElementById("winner-p").textContent = "It's a tie!";
    }
}
function resetScore() {
    homeCount = 0
    guestCount = 0
    changeCount.textContent = homeCount
    changeGuestCount.textContent = guestCount;
    document.getElementById("winner-p").textContent = "";
    document.getElementById("guest-title").style.color = "white"
        document.getElementById("home-title").style.color = "white"
}