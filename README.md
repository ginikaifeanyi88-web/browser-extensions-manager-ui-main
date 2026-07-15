# Frontend Mentor - Browser extensions manager UI solution

This is a solution to the [Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Toggle extensions between active and inactive states
- Filter active and inactive extensions
- Remove extensions from the list
- Select their color theme
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.png)

### Links

- Live Site URL: [Add live site URL here](https://browser-extensions-manager-ui-main-theta.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

  
### What I learned

This was a challenge, probably the most demanding project so far. Doing this taught me a LOT about JavaScript. I feel more comfortable chaining functions together to add interactivity to websites now. Took a bit out of mee but I am determined to keep improving my skills.

This little function below is where it all clicked together for me. It's all about problem solving! I was able to change the state of each extension to "active" or "inactive" by updating their class attributes using the toggle in each of them. 
```js
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
```

### Continued development

There are some obvious issues. For one when removing each extension, there are inconsistencies in what message is displayed on the page depending on the button you click (if a message at all). I also want to add a prompt message that asks the user "if they wish to remove this extension" and if they click "yes", the extension is removed and a toast message is displayed. Hopefully I am able to make these fixes and updates in the coming days.

### Useful resources

- [Net Ninja](https://www.youtube.com/playlist?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc) - His free JavaScript introduction videos really helped me understand the basics. 
- Stack Overflow - This was without a doubt the most useful asset for this project. I am fallen in love with this forum in a way I never thought I would ever. Obnoxious users, but boy they can be helpful in tricky situations.


## Author

- Frontend Mentor - [@ginikaifeanyi88-web](https://www.frontendmentor.io/profile/ginikaifeanyi88-web)
