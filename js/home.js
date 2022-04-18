///////////// slider start ////////////

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}

///////////// slider end ///////////////////

// topButton

var mybutton = document.getElementById("topBtn");
var addBtn2 = document.getElementById("addBtn2");
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        console.log(addBtn2)
        mybutton.style.display = "block";
        addBtn2.style.display = "block";
    } else {
        mybutton.style.display = "none";
        addBtn2.style.display = "none";
    }
}

function topFunction() {

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}


////////////// image gallary category start /////////////// 

var filterItems = document.querySelector(".items");
var productItem = document.querySelectorAll(".info");

window.onload = () => {
    filterItems.onclick = (selectedItem) => {
        if (selectedItem.target.classList.contains("item")) {

            filterItems.querySelector(".active").classList.remove("active");
            selectedItem.target.classList.add("active")
            let filterName = selectedItem.target.getAttribute("data-name")

            productItem.forEach((element) => {
                let filterProduct = element.getAttribute("data-name");
                if (filterName == filterProduct || filterName == "all") {
                    element.classList.remove("hide");
                    element.classList.add("show");
                } else {
                    element.classList.add("hide");
                    element.classList.remove("show");

                }
            });

        }
    }
}

////////////////////////// add cart ///////////////////////////////////



var iconAdd1 = document.querySelector('.addIcon1');
var spanAdd1 = document.querySelector('.spanAdd1');
var buttonAdd = document.getElementsByClassName('addBtn')
var but;
for (but of buttonAdd) {
    but.addEventListener('click', (e) => {

        var add = Number(iconAdd1.getAttribute('data-count') || 0);
        iconAdd1.setAttribute('data-count', add + 1);
        console.log(iconAdd1)
        iconAdd1.classList.add('zero');
        spanAdd1.style.display = "block";
        var count = iconAdd1.getAttribute('data-count')
        spanAdd1.innerHTML = `${count}`;
    })
}



var addIcon2 = document.querySelector('.addIcon2');
var spanAdd2 = document.querySelector('.spanAdd2')

for (but of buttonAdd) {
    but.addEventListener('click', (e) => {
        var add = Number(addIcon2.getAttribute('data-count') || 0);
        addIcon2.setAttribute('data-count', add + 1);
        console.log(addIcon2)
        addIcon2.classList.add('zero');
        spanAdd2.style.display = "block";
        var count = addIcon2.getAttribute('data-count')
        spanAdd2.innerHTML = `${count}`;
    })
}




/////////////////////////////////////////////////////////////////

// accordion

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}





















// var container =document.querySelector(".container")

// var i = 0;
// var images = [];
// var slideTime = 3000; // 3 seconds

// images[0] = '../one.jpg';
// images[1] = '../two.jpg';
// images[2] = '../three.jpg';

// function changePicture() {

//     document.container.style.background=`url('${images[i]}')`
//     // document.container.style.backgroundImage = images[i];

//     if (i < images.length - 1) {
//         i++;
//     } else {
//         i = 0;
//     }

//     setTimeout("changePicture()", slideTime);
// }

// window.onload = changePicture;