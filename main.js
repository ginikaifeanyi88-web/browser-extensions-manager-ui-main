/* Variable declarations */
let colorTheme = document.querySelector("#color-theme");
const body= document.querySelector("body");
const header = document.querySelector(".header");
const logoColor = document.querySelector("#text-path");
const gridTitle = document.querySelector(".extension-list-header > h1");
const stateButtons = document.querySelectorAll(".state-buttons > div input");
const extensions = document.querySelectorAll(".extensions");
const extensionNames = document.querySelectorAll(".extension-text > h3");
const extensionDescriptions = document.querySelectorAll(".extension-text > p");
const removeButtons = document.querySelectorAll(".extension-buttons > div .remove-button");
const toggleBackgrounds = document.querySelectorAll(".slider");
const toggleInputs = document.querySelectorAll(".switch input");
const messageContainer = document.querySelector(".messageContainer");
let activeButtonClicked = false;

/*  Main function for changing theme colors*/
const changeTheme = function () {
    if (colorTheme.getAttribute("class") == "dark-state") {
        colorTheme.setAttribute("class", "light-state");
        colorTheme.setAttribute("src", "/assets/images/icon-moon.svg");
        colorTheme.style.backgroundColor = "hsl(0, 0%, 93%)";
           body.style.backgroundColor = "hsl(219, 67%, 94%)";
             if (document.querySelector(".active_message") !=null) {
          document.querySelector(".active_message").style.color = "";
    };
          header.style.backgroundColor = "#fff"
          header.style.boxShadow = "0px 3px 5px 0px hsl(217, 23%, 74%)"
          logoColor.style.fill = "hsl(225, 23%, 24%)";
          gridTitle.style.color = "hsl(225, 23%, 24%)";
          stateButtons.forEach(stateButton => {
    stateButton.style.color = "hsl(225, 23%, 24%)";
    stateButton.style.backgroundColor = "#fff";
    stateButton.style.border = "0.7px solid hsl(0, 0%, 78%)";
});

   extensions.forEach(extension => {
    extension.style.backgroundColor = "#fff";
    extension.style.border = "0.7px solid hsl(0, 2%, 82%)";
    extension.style.boxShadow = "0px 3px 5px 0px hsl(217, 39%, 87%)";
});

   extensionNames.forEach(extensionName => {
    extensionName.style.color = "hsl(225, 23%, 24%)";
});

   extensionDescriptions.forEach(extensionDescription => {
    extensionDescription.style.color = "hsl(226, 11%, 37%)";
});

 removeButtons.forEach(removeButton => {
    removeButton.style.color = "hsl(225, 23%, 24%)";
    removeButton.style.backgroundColor = "#fff";
    removeButton.style.border = "0.7px solid hsl(0, 2%, 82%)";

});

toggleInputs.forEach(toggleInput => {
      let checkboxColor = toggleInput.nextElementSibling;
        if (toggleInput.checked) {
            checkboxColor.style.backgroundColor = "hsl(3, 71%, 56%)";
         } else  {
            if  (colorTheme.getAttribute("class") == "dark-state") {
            checkboxColor.style.backgroundColor = "";
            } else {
                checkboxColor.style.backgroundColor = "#ccc";
            }
        }
});
    } else {
        colorTheme.setAttribute("class", "dark-state");
         colorTheme.setAttribute("src", "/assets/images/icon-sun.svg");
          colorTheme.style.backgroundColor = "";
          if (document.querySelector(".active_message") !=null) {
          document.querySelector(".active_message").style.color = "#fff";
    };
        body.style.backgroundColor = "";
        header.style.backgroundColor = "";
          header.style.boxShadow = "";
        logoColor.style.fill = "";
        gridTitle.style.color = "";
        stateButtons.forEach(stateButton => {
    stateButton.style.color = "#fff";
    stateButton.style.backgroundColor = "hsl(225, 23%, 24%)";
    stateButton.style.border = "";
});

  extensions.forEach(extension => {
    extension.style.backgroundColor = "";
    extension.style.border = "";
    extension.style.boxShadow = "";
});

   extensionNames.forEach(extensionName => {
    extensionName.style.color = "";
});

 extensionDescriptions.forEach(extensionDescription => {
    extensionDescription.style.color = "";
});
 removeButtons.forEach(removeButton => {
    removeButton.style.color = "";
    removeButton.style.backgroundColor = "";
    removeButton.style.border = "";
});
 toggleBackgrounds.forEach(toggleBackground => {
toggleBackground.style.backgroundColor = "";
});
    }
};


/* Function for color theme button focus state  */
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

/* Functions for hover state of state buttons*/
 stateButtons.forEach(stateButton => {
stateButton.addEventListener("mouseenter", ()=>{
    if (colorTheme.getAttribute("class") == "light-state") {
    stateButton.style.color = "#fff";
    stateButton.style.backgroundColor = "hsl(3, 71%, 56%)"
    } else {
        stateButton.style.color = "hsl(227, 75%, 14%)";
    stateButton.style.backgroundColor = "hsl(3, 71%, 56%)"
    }
});
 });

  stateButtons.forEach(stateButton => {
stateButton.addEventListener("mouseleave", ()=>{
    if (colorTheme.getAttribute("class") == "dark-state") {
    stateButton.style.color = "";
    stateButton.style.backgroundColor = "";
       stateButton.style.border = "";
    } else {
         stateButton.style.color = "hsl(225, 23%, 24%)";
    stateButton.style.backgroundColor = "#fff";
    stateButton.style.border = "0.7px solid hsl(0, 0%, 78%)";
    }
});
 });


 /* Function for hover state of removeButtons*/
removeButtons.forEach(removeButton => {
removeButton.addEventListener("mouseenter", ()=>{
    if (colorTheme.getAttribute("class") == "light-state") {
    removeButton.style.color = "#fff";
   removeButton.style.backgroundColor = "hsl(3, 71%, 56%)"
    } else {
        removeButton.style.color = "hsl(227, 75%, 14%)";
    removeButton.style.backgroundColor = "hsl(3, 71%, 56%)"
    }
});
 });

removeButtons.forEach(removeButton => {
removeButton.addEventListener("mouseleave", ()=>{
    if (colorTheme.getAttribute("class") == "dark-state") {
 removeButton.style.color = "";
   removeButton.style.backgroundColor = "";
       removeButton.style.border = "";
    } else {
         removeButton.style.color = "hsl(225, 23%, 24%)";
    removeButton.style.backgroundColor = "#fff";
   removeButton.style.border = "0.7px solid hsl(0, 0%, 78%)";
    }
});
 });


 /* Function to change state of extension to active or inactive */
toggleInputs.forEach(toggleInput => {
    toggleInput.addEventListener("change", ()=>{
      let toggleID = toggleInput.getAttribute("id").split("-checkbox");
            let extensionID = toggleID[0];
        if (toggleInput.checked) {
            extensionClass = document.getElementById(extensionID).getAttribute("class");
      
                extensionClassInner = document.getElementById(extensionID).getAttribute("class");
                extensionClassInner = "extensions active";
                document.getElementById(extensionID).setAttribute("class", extensionClassInner);
        } else  {
            extensionClassInner = document.getElementById(extensionID).getAttribute("class");
            extensionClassInner -= "active";
                extensionClassInner = "extensions inactive";
                document.getElementById(extensionID).setAttribute("class", extensionClassInner);
        }
    });
});

 /* Function to change color of toggle when clicked */
toggleInputs.forEach(toggleInput => {
    toggleInput.addEventListener("change", ()=>{
      let checkboxColor = toggleInput.nextElementSibling;
        if (toggleInput.checked) {
            checkboxColor.style.backgroundColor = "hsl(3, 71%, 56%)";
         } else  {
            if  (colorTheme.getAttribute("class") == "dark-state") {
            checkboxColor.style.backgroundColor = "";
            } else {
                checkboxColor.style.backgroundColor = "#ccc";
            }
        }
    });
});


/* Function for active button page  */
document.getElementById("activeButton").addEventListener("click", () => {
     messageContainer.innerHTML = "";
    let i = 0;
    extensions.forEach(extension => {
        if (extension.getAttribute("class").includes("inactive")) {
            extension.style.display= "none";
        } else {
              extension.style.display = "";
              i++;
        }
    });
    if (i==0 && (messageContainer.childNodes.length == 0)) {
        let html = "<div class='active_message'>You have no active extensions</div>";
        messageContainer.innerHTML += html;
        if (colorTheme.getAttribute("class") == "light-state") {
            document.querySelector(".active_message").style.color = "";
        } else {
            document.querySelector(".active_message").style.color = "#fff";
        }
    }
    else if (i==0 && !(messageContainer.childNodes.length == 0)) {
        messageContainer.innerHTML = "";
        let html = "<div class='active_message'>You have no active extensions</div>";
        messageContainer.innerHTML += html;
         if (colorTheme.getAttribute("class") == "light-state") {
           document.querySelector(".active_message").style.color = "";
        } else {
            document.querySelector(".active_message").style.color = "#fff";
        }
    }
      else if ((document.getElementsByClassName("extensions").length == 0)) {
        messageContainer.innerHTML = "";
         let html = "<div class='active_message'>You have no installed extensions</div>";
        messageContainer.innerHTML += html;
          if (colorTheme.getAttribute("class") == "light-state") {
           document.querySelector(".active_message").style.color = "";
        } else {
            document.querySelector(".active_message").style.color = "#fff";
        }
    }
});



/* Function for inactive button page  */
document.getElementById("inactiveButton").addEventListener("click", () => {
     messageContainer.innerHTML = "";
       let i = 0;
    extensions.forEach(extension => {
        if (!(extension.getAttribute("class").includes("inactive"))) {
            extension.style.display = "none";
        } else {
              extension.style.display = "";
              i++;
        }
    });
        if (i==0 && (messageContainer.childNodes.length == 0)) {
        let html = "<div class='active_message'>You have no inactive extensions</div>";
        messageContainer.innerHTML += html;
          if (colorTheme.getAttribute("class") == "light-state") {
           document.querySelector(".active_message").style.color = "";
        } else {
            document.querySelector(".active_message").style.color = "#fff";
        }
    }
    else if (i==0 && !(messageContainer.childNodes.length == 0)) {
        messageContainer.innerHTML = "";
        let html = "<div class='active_message'>You have no inactive extensions</div>";
        messageContainer.innerHTML += html;
          if (colorTheme.getAttribute("class") == "light-state") {
           document.querySelector(".active_message").style.color = "";
        } else {
            document.querySelector(".active_message").style.color = "#fff";
        }
    }
    else if ((document.getElementsByClassName("extensions").length == 0)) {
        messageContainer.innerHTML = "";
         let html = "<div class='active_message'>You have no installed extensions</div>";
        messageContainer.innerHTML += html;
          if (colorTheme.getAttribute("class") == "light-state") {
           document.querySelector(".active_message").style.color = "";
        } else {
            document.querySelector(".active_message").style.color = "#fff";
        }
    }
});

/* Function for all button page  */
document.getElementById("allButton").addEventListener("click", () => {
     messageContainer.innerHTML = "";
    extensions.forEach(extension => {
              extension.style.display = "";
    });
      if ((document.getElementsByClassName("extensions").length == 0)) {
        messageContainer.innerHTML = "";
         let html = "<div class='active_message'>You have no installed extensions</div>";
        messageContainer.innerHTML += html;
          if (colorTheme.getAttribute("class") == "light-state") {
           document.querySelector(".active_message").style.color = "";
        } else {
            document.querySelector(".active_message").style.color = "#fff";
        }
    }
});

/* Function to remove extensions */

removeButtons.forEach(removeButton => {
    removeButton.addEventListener("click", ()=>{
        let removeButtonName = removeButton.getAttribute("id");
        let extensionProperty = removeButtonName.split("remove-");
        let extensionFullProperty = "extension-" + extensionProperty[1];
        document.getElementById(extensionFullProperty).remove();
            if (document.getElementsByClassName("extensions").length == 0) {
        messageContainer.innerHTML = "";
         let html = "<div class='active_message'>You have no installed extensions</div>";
        messageContainer.innerHTML += html;
          if (colorTheme.getAttribute("class") == "light-state") {
           document.querySelector(".active_message").style.color = "";
        } else {
            document.querySelector(".active_message").style.color = "#fff";
        }
    }
    });
});

