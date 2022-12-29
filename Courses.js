var courses = [{
        originalIndex: 0,
        image: 'javascriptDef.png',
        title: 'what is javascript?',
        category: 'JS',
        price: 9.9
    },
    {
        originalIndex: 1,
        image: 'htmlBasics.PNG',
        title: 'basics of HTML',
        category: 'HTML',
        price: 5.9
    },
    {
        originalIndex: 2,
        image: 'htmlElements.png',
        title: 'HTML elements and tags',
        category: 'HTML',
        price: 9.9
    },
    {
        originalIndex: 3,
        image: 'cssSelectors.jpg',
        title: 'CSS selectors',
        category: 'CSS',
        price: 69.9
    },
    {
        originalIndex: 4,
        image: 'javascriptVariables.png',
        title: 'variables and data type of javascript',
        category: 'JS',
        price: 19.9
    },
    {
        originalIndex: 5,
        image: 'javascriptOperators.png',
        title: 'Javascript operators and conditions',
        category: 'JS',
        price: 29.9
    },
    {
        originalIndex: 6,
        image: 'htmlAttrVal.jpg',
        title: 'HTML attributes and values',
        category: 'HTML',
        price: 19.9
    },
    {
        originalIndex: 7,
        image: 'cssProperties.png',
        title: 'CSS properties',
        category: 'CSS',
        price: 29.9
    },
    {
        originalIndex: 8,
        image: 'javascriptObjects.png',
        title: 'Javascript objects and arrays',
        category: 'JS',
        price: 39.9
    },
    {
        originalIndex: 9,
        image: 'cssMesures.png',
        title: 'mesures and unites of CSS',
        category: 'CSS',
        price: 19.9
    },
    {
        originalIndex: 10,
        image: 'cssAnimation.png',
        title: 'CSS animations',
        category: 'CSS',
        price: 19.9
    },
    {
        originalIndex: 11,
        image: 'javascriptFunctions.png',
        title: 'The basics of javascript',
        category: 'JS',
        price: 29.9
    },
    {
        originalIndex: 12,
        image: 'javascriptEvents.png',
        title: 'javascript events',
        category: 'JS',
        price: 59.9
    },
    {
        originalIndex: 13,
        image: 'cssColors.png',
        title: 'css colors',
        category: 'css',
        price: 29.9
    },
    {
        originalIndex: 14,
        image: 'phpBasics.png',
        title: 'getting started with php',
        category: 'php',
        price: 15.9
    },
    {
        originalIndex: 15,
        image: 'javascriptFunctions2.png',
        title: 'functions and loops with javascript',
        category: 'JS',
        price: 19.9
    },
    {
        originalIndex: 16,
        image: 'phpDataBase.png',
        title: 'connecting to database using PHP',
        category: 'PHP',
        price: 29.9
    },
    {
        originalIndex: 17,
        image: 'phpCRUD.png',
        title: 'manipulating crud using php',
        category: 'php',
        price: 45.9
    },
    {
        originalIndex: 18,
        image: 'javascriptDOM.png',
        title: 'DOM the power of javascript',
        category: 'JS',
        price: 23.9
    }
]



// display all courses when the page loads
window.addEventListener('DOMContentLoaded', function() {
    diplayMenuItems(courses);
});

function diplayMenuItems(CoursesItems) {
    let displayMenu = CoursesItems.map(function(item) {
        return `<div class="menu1-item">
            <img src=${item.image} alt=${item.title} class="photo" />
                <h3>${item.title}</h3>
                <h4 class="price">$${item.price}</h4>
            </div>`;
    });

    displayMenu = displayMenu.join("");
    document.getElementById('Section').innerHTML = displayMenu;
}



//Search bar
const searchInput = document.getElementById("Search");
const itemsList = document.getElementById("Section");
const itemsCount = itemsList.getElementsByTagName("div");

searchInput.addEventListener('keyup', filterItems);

function filterItems() {
    searchInput.style.backgroundColor = "rgb(205, 205, 205)";

    const searchTerm = searchInput.value.toLowerCase();
    const filteredItems = courses.filter(item => item.title.toLowerCase().includes(searchTerm));
    const filteredIndexes = filteredItems.map(function(item) { return item.originalIndex });

    for (var i = 0; i < itemsCount.length; i++) {
        if (filteredIndexes.indexOf(i) < 0) {
            itemsCount[i].className = "hiddenElement";
        } else {
            itemsCount[i].className = "menu1-item";
        }
    }
}




//Category
const buttons = document.querySelectorAll('.BT');

for (const button of buttons) {
    button.addEventListener('click', filterByButton);

    function filterByButton() {
        const searchTerm = button.value.toLowerCase();
        const filteredItems = courses.filter(item => item.category.toLowerCase().includes(searchTerm));
        const filteredIndexes = filteredItems.map(function(item) { return item.originalIndex });

        for (var i = 0; i < itemsCount.length; i++) {
            if (searchTerm == 'all') {
                itemsCount[i].className = " menu1-item";
            } else {
                if (filteredIndexes.indexOf(i) < 0) {
                    itemsCount[i].className = " hiddenElement";
                } else {
                    itemsCount[i].className = " menu1-item";
                }
            }
        }
    }
}



//Price range
const Range = document.getElementById('range');
Range.addEventListener('change', function() {

    function priceRangeFilter(courses, minPrice, maxPrice) {
        const filterCourses = courses.filter(item => {
            return item.price >= minPrice && item.price <= maxPrice;
        });
        const filteredByIndexes = filterCourses.map(item => {
            return item.originalIndex
        });

        for (var i = 0; i < 19; i++) {
            if (filteredByIndexes.indexOf(i) < 0) {
                itemsCount[i].className = " hiddenElement";
            } else {
                itemsCount[i].className = " menu1-item";
            }
        }
    }

    priceRangeFilter(courses, 0, Range.value);
});


//Range display 
const slider = document.getElementById("range"),
    min = slider.min,
    max = slider.max,
    value = slider.value;

slider.style.background = `linear-gradient(to right, rgb(66, 10, 155) 0%, rgb(205, 205, 205) ${(value-min)/(max-min)*100}%, #DEE2E6 ${(value-min)/(max-min)*100}%, #DEE2E6 100%)`

slider.oninput = function() {
    this.style.background = `linear-gradient(to right, rgb(66, 10, 155) 0%, rgb(205, 205, 205) ${(this.value-this.min)/(this.max-this.min)*100}%, #DEE2E6 ${(this.value-this.min)/(this.max-this.min)*100}%, #DEE2E6 100%)`

    document.getElementById("labelprice").innerHTML = "$" + this.value;
};


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