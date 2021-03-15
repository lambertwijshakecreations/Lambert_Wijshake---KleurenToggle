//Het toggle menu
let toggleNavStatus = false;

let toggleNav = function(){
  let getSidebar = document.querySelector(".nav");
  let getSidebarUl = document.querySelector(".nav ul");
  let getSidebarLinks = document.querySelectorAll("a");

  if (toggleNavStatus === false) {
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "250px";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++){
      getSidebarLinks[i].style.opacity= "1";
    }

    toggleNavStatus = true;
  }

  else if (toggleNavStatus === true) {
    getSidebarUl.style.visibility = "hidden";
    getSidebar.style.width = "0px";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++){
      getSidebarLinks[i].style.opacity= "0";
    }

    toggleNavStatus = false;
  }
}

//Veranderenvan achtergrond kleuren.

//wit achtergrond
let chanceColorToWhite = function(){
document.body.style.backgroundColor = "White";
};
let backGrWhite = document.getElementById("home-Btn");
backGrWhite.addEventListener('click', function(){chanceColorToWhite(), toggleNav()});

//rood achtergrond
let chanceColorToRed = function(){
document.body.style.backgroundColor = "red";
};
let backGrRed = document.getElementById("red-Btn");
backGrRed.addEventListener('click', function(){chanceColorToRed(), toggleNav()});

//oranje achtergrond
let chanceColorToOrange = function(){
document.body.style.backgroundColor = "orange";
};
let backGrOrange = document.getElementById("orange-Btn");
backGrOrange.addEventListener('click', function(){chanceColorToOrange(), toggleNav()});

//paars achtergrond
let chanceColorToPurple = function(){
document.body.style.backgroundColor = "purple";
};
let backGrPurple = document.getElementById("purple-Btn");
backGrPurple.addEventListener('click', function(){chanceColorToPurple(),toggleNav()});

//groen achtergrond
let chanceColorToGreen = function(){
document.body.style.backgroundColor = "green";
};
let backGrGreen = document.getElementById("green-Btn");
backGrGreen.addEventListener('click', function(){chanceColorToGreen(), toggleNav()});




