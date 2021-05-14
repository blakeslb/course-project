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
const toggleMenu = function () {
    menuItems.classList.toggle('open');

}

// Bind event listener to our menu icon NOT menu items
hamburgerMenuIcon.addEventListener('click', toggleMenu);

console.log(hamburgerMenuIcon);
console.log(menuItems);

// toggleMenu(); 



//Array of comics:
const comicBooks = [

    {

        title: "Fun Home: A Family Tragicomic",

        author: "by Alison Bechdel",

        rating: "5 stars",

        href: "./fun-home.html",

        imgSrc: "/images/fun-home.jpg",

        imgAlt: "Fun Home: A Family Tragicomic comic book cover",

    },

    {

        title: "Hunter X Hunter Vol. 1",

        author: "by Yoshihiro Togashi",

        rating: "5 stars",

        href: "./hunter-x-hunter.html",

        imgSrc: "/images/hunter-x-hunter.jpg",

        imgAlt: "Hunter X Hunter comic book cover",

    },

    {

        title: "The Walking Dead, Vol. 1: Days Gone Bye",

        author: "by Robert Kirkman",

        rating: "4 stars",

        href: "./the-walking-dead.html",

        imgSrc: "/images/the-walking-dead.jpg",

        imgAlt: "The Walking Dead, Vol. 1: Days Gone Bye comic book cover",

    }

]

//Select display more button 

const displayMoreButton = document.getElementById('index_button');

//container for all comics
const indexCovers = document.querySelector(".index_covers");


// write a function to add 3 more comic books to index covers class

const displayMoreComics = function () {

    //loop through comic book object array
    for (i = 0; i < 3; i++) {

        //create div parent for new comic book
        let newComic = document.createElement('div');
        newComic.className = "cover";

        //create elements, add nodes, append to newComic
        let comicImg = document.createElement('img');
        comicImg.src = comicBooks[i].imgSrc;
        comicImg.setAttribute('alt', comicBooks[i].imgAlt);
        newComic.appendChild(comicImg);

        let title = document.createElement('p');
        title.appendChild(document.createTextNode(comicBooks[i].title));
        title.className = "index_title"
        newComic.appendChild(title);

        //since I used <br> in my html for formatting (which is bad practice), need to create a <br> tag to add formatting here too
        let space = document.createElement('br');
        newComic.appendChild(space);

        let author = document.createTextNode(comicBooks[i].author);
        newComic.appendChild(author);

        newComic.appendChild(space);

        let rating = document.createTextNode(comicBooks[i].rating);
        newComic.appendChild(rating);

        let href = document.createElement('a');
        let link = document.createTextNode("Details");
        href.appendChild(link);
        link.href = comicBooks[i].href;
        newComic.appendChild(href);

        //append new comic to comic container 
        indexCovers.appendChild(newComic)

    }
}

displayMoreButton.addEventListener('click', displayMoreComics);

