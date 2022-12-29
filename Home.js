var courses = [{
        image: 'javascriptDef.png',
        title: 'what is javascript?',
        category: 'JS',
        price: 9.9
    },
    {
        image: 'htmlBasics.PNG',
        title: 'basics of HTML',
        category: 'HTML',
        price: 5.9
    },
    {
        image: 'htmlElements.png',
        title: 'HTML elements and tags',
        category: 'HTML',
        price: 9.9
    },
    {
        image: 'cssSelectors.jpg',
        title: 'CSS selectors',
        category: 'CSS',
        price: 69.9
    },
    {
        image: 'javascriptVariables.png',
        title: 'variables and data type of javascript',
        category: 'JS',
        price: 19.9
    },
    {
        image: 'javascriptOperators.png',
        title: 'Javascript operators and conditions',
        category: 'JS',
        price: 29.9
    },
    {
        image: 'htmlAttrVal.jpg',
        title: 'HTML attributes and values',
        category: 'HTML',
        price: 19.9
    },
    {
        image: 'cssProperties.png',
        title: 'CSS properties',
        category: 'CSS',
        price: 29.9
    },
    {
        image: 'javascriptObjects.png',
        title: 'Javascript objects and arrays',
        category: 'JS',
        price: 39.9
    },
    {
        image: 'cssMesures.png',
        title: 'mesures and unites of CSS',
        category: 'CSS',
        price: 19.9
    },
    {
        image: 'cssAnimation.png',
        title: 'CSS animations',
        category: 'CSS',
        price: 19.9
    },
    {
        image: 'javascriptFunctions.png',
        title: 'The basics of javascript',
        category: 'JS',
        price: 29.9
    },
    {
        image: 'javascriptEvents.png',
        title: 'javascript events',
        category: 'JS',
        price: 59.9
    },
    {
        image: 'cssColors.png',
        title: 'css colors',
        category: 'css',
        price: 29.9
    },
    {
        image: 'phpBasics.png',
        title: 'getting started with php',
        category: 'php',
        price: 15.9
    },
    {
        image: 'javascriptFunctions2.png',
        title: 'functions and loops with javascript',
        category: 'JS',
        price: 19.9
    },
    {
        image: 'phpDataBase.png',
        title: 'connecting to database using PHP',
        category: 'PHP',
        price: 29.9
    },
    {
        image: 'phpCRUD.png',
        title: 'manipulating crud using php',
        category: 'php',
        price: 45.9
    },
    {
        image: 'javascriptDOM.png',
        title: 'DOM the power of javascript',
        category: 'JS',
        price: 23.9
    }
]

// Generating random numbers into an array
const arr = []
do {
    const randomNumber = Math.floor(Math.random() * (courses.length - 1)) + 1

    // Pushing into the array only if the array does not contain it
    if (!arr.includes(randomNumber)) {
        arr.push(randomNumber);
    }
} while (arr.length < 3);



// Setting Random Courses's Image and Description(Title,Price) 
var IM1 = document.getElementById("I1"),
    IM2 = document.getElementById("I2"),
    IM3 = document.getElementById("I3");

var T = document.querySelectorAll(".Title"),
    P = document.querySelectorAll(".Price");


IM1.setAttribute("src", courses[arr[0]].image);
IM2.setAttribute("src", courses[arr[1]].image);
IM3.setAttribute("src", courses[arr[2]].image);

document.querySelectorAll(".Title").innerHTML = courses[arr[0]].title;
document.querySelectorAll(".Price").innerHTML = courses[arr[0]].price;

for (i = 0; i < 3; i++) {
    T[i].innerHTML = courses[arr[i]].title;
    P[i].innerHTML = '$' + courses[arr[i]].price;
}


// Buttons 
var btn1 = document.getElementById("btnCL1"),
    Believing = document.getElementById("Believe"),
    btn2 = document.getElementById("btnCL2");

btn1.addEventListener("click", function() {
    window.location.href = "Courses.html";
})

btn1.addEventListener("mouseover", function() {
    Believe.innerHTML = "Believe()";
})

btn1.addEventListener("mouseleave", function() {
    Believe.innerHTML = "Eat(), Sleep(), Code(), Repeat()";
})

btn2.addEventListener("click", function() {
    window.location.href = "Courses.html";
})


//NavBar
var BTNAV1 = document.getElementById("BTNAV1"),
    BTNAV2 = document.getElementById("BTNAV2"),
    BTNAV3 = document.getElementById("BTNAV3");

BTNAV1.addEventListener("click", function() {
    window.location.href = "Home.html";
})
BTNAV2.addEventListener("click", function() {
    window.location.href = "Courses.html";
})
BTNAV3.addEventListener("click", function() {
    window.location.href = "About.html";
})