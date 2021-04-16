console.log("this works");

//add open class to menu Items 
//style open class to display: none; 



// Task: Write JavaScript code so that clicking the hamburger 
// menu will hide the menu items if it is currently showing, 
// or show the menu items if it is currently hidden

// Select our menu icon
const hamburgerMenuIcon = document.querySelector('#hamburger-wrap');

// Select our navbar list of menu items
const menuItems = document.querySelector('#navbar');

// Write our event handler to 'show' or 'hide'
// Tip: use classList to help us toggle between show and hiding a class
const toggleMenu = function() {
    menuItems.classList.toggle('open');

}

// Bind event listener to our menu icon NOT menu items
hamburgerMenuIcon.addEventListener('click', toggleMenu); 

console.log(hamburgerMenuIcon);
console.log(menuItems);

// toggleMenu(); 