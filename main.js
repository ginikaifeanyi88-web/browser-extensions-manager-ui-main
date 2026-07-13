let colorTheme = document.querySelector("#color-theme");
const body= document.querySelector("body");
const header = document.querySelector(".header");
const logoColor = document.querySelector("#text-path");
const gridTitle = document.querySelector(".extension-list-header > h1");
const stateButtons = document.querySelectorAll(".state-buttons > div input");
const extensions = document.querySelectorAll(".extensions");
const extensionNames = document.querySelectorAll(".extension-text > h3");
const removeButtons = document.querySelectorAll(".extension-buttons > div .remove-button");
const toggleBackground = document.querySelectorAll(".switch > input");


const changeTheme = function () {
    if (colorTheme.getAttribute("class") == "dark-state") {
        colorTheme.setAttribute("class", "light-state");
        colorTheme.setAttribute("src", "/assets/images/icon-moon.svg");
        colorTheme.style.backgroundColor = "hsl(0, 0%, 93%)";
           body.style.backgroundColor = "hsl(219, 67%, 94%)";
          header.style.backgroundColor = "#fff"
          header.style.boxShadow = "0px 3px 5px 0px hsl(217, 23%, 74%)"
          logoColor.style.fill = "hsl(225, 23%, 24%)";

    } else {
        colorTheme.setAttribute("class", "dark-state");
         colorTheme.setAttribute("src", "/assets/images/icon-sun.svg");
          colorTheme.style.backgroundColor = "";
        body.style.backgroundColor = "";
        header.style.backgroundColor = "";
          header.style.boxShadow = "";
        logoColor.style.fill = "";
    }
};

// stateButtons.forEach(stateButton => {
//     stateButton.style.color = "red";
// });

document.getElementById("color-theme").addEventListener("click", () => {
       if (colorTheme.getAttribute("class") == "dark-state") { 
        colorTheme.style.border = "2px solid hsl(227, 75%, 14%)";
         colorTheme.style.boxShadow=   "0px 0px 0px 2px hsl(3, 71%, 56%)";
      } else {
        colorTheme.style.border = "2px solid #fff";
        colorTheme.style.boxShadow=   "0px 0px 0px 2px hsl(3, 71%, 56%)";
      }
});

function blurFunction() {
 colorTheme.style.border = "";
 colorTheme.style.boxShadow=   "";
}
