/*
Task 1
=======
Write JavaScript below that logs:
    1. All the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6
    
    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
// 1 Solution

let allP = document.querySelectorAll("p")
console.log(allP.length)


//2 Solution 

let firstDiv = document.querySelector("body");
console.log(firstDiv.firstElementChild.nextElementSibling);

// 3 Solution

let idJumbo = document.querySelector("#jumbotron-text")

console.log(idJumbo);

// 4 Solution
let pClassSpecified = document.querySelectorAll(".primary-content p");

console.log(pClassSpecified.length);