let homeCount = 0;
let changeCount = document.getElementById("home--btn");

function plusOne() {
  homeCount += 1;
  changeCount.textContent = homeCount;
}

function plusTwo() {
  homeCount += 2;
  changeCount.textContent = homeCount;
}

function plusThree() {
  homeCount += 3;
  changeCount.textContent = homeCount;
}

let guestCount = 0;
let changeGuestCount = document.getElementById("guest--btn");

function guestPlusOne() {
  guestCount += 1;
  changeGuestCount.textContent = guestCount;
}

function guestPlusTwo() {
  guestCount += 2;
  changeGuestCount.textContent = guestCount;
}

function guestPlusThree() {
  guestCount += 3;
  changeGuestCount.textContent = guestCount;
}



function resetScore() {
  homeCount = 0;
  guestCount = 0;
  changeCount.textContent = homeCount;
  changeGuestCount.textContent = guestCount;
  document.getElementById("winner-p").textContent = "";
  document.getElementById("guest-title").style.color = "white";
  document.getElementById("home-title").style.color = "white";
}

let matchCount = 0;


function saveGame() {
    matchCount++;
    const matchesElement = document.getElementById("matches");
  
    let homeColor = "";
    let guestColor = "";
    let winnerMessage = "";
  
    if (homeCount > guestCount) {
      homeColor = "green";
      guestColor = "red";
      winnerMessage = "Home team is the winner!";
    } else if (guestCount > homeCount) {
      homeColor = "red";
      guestColor = "green";
      winnerMessage = "Guest team is the winner!";
    } else {
      winnerMessage = "It's a tie!";
    }
  
    document.getElementById("winner-p").textContent = winnerMessage;
  
    const listItem = document.createElement("li");
  
    const matchNumber = document.createElement("span");
    matchNumber.textContent = `Match ${matchCount}: `;
    listItem.appendChild(matchNumber);
  
    const homeTeam = document.createElement("span");
    homeTeam.textContent = "Home ";
    homeTeam.style.color = homeColor;
    listItem.appendChild(homeTeam);
  
    const homeScore = document.createElement("span");
    homeScore.textContent = homeCount;
    homeScore.style.color = homeColor;
    listItem.appendChild(homeScore);
  
    listItem.appendChild(document.createTextNode(" - "));
  
    const guestTeam = document.createElement("span");
    guestTeam.textContent = "Guest ";
    guestTeam.style.color = guestColor;
    listItem.appendChild(guestTeam);
  
    const guestScore = document.createElement("span");
    guestScore.textContent = guestCount;
    guestScore.style.color = guestColor;
    listItem.appendChild(guestScore);
  
    matchesElement.appendChild(listItem);
  }
  
  
  