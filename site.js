let portfolio = document.querySelector(".portfolio");
let navAll = document.querySelector(".nav");
let navLinks = document.querySelector(".nav__links");
let navLinksElement = document.querySelectorAll(".nav__links--element");
let hamburger = document.querySelector(".nav__hamburger");
let hamburgerTop = document.querySelector(".nav__hamburger--top");
let hamburgerMid = document.querySelector(".nav__hamburger--mid");
let hamburgerBot = document.querySelector(".nav__hamburger--bot");
let topOffset = offset(portfolio);
navBarChange();

window.addEventListener("scroll", () => {
    navBarChange();
});

window.addEventListener("resize", () => {
    topOffset = offset(portfolio);
    navBarChange();
});

hamburger.addEventListener("click", function() {
    hamburgerTop.classList.toggle("navAnimationTop");
    hamburgerMid.classList.toggle("navAnimationMid");
    hamburgerBot.classList.toggle("navAnimationBot");
    
    navLinks.classList.toggle("visible");
});

//function that gets vertical offset of the element passed in 
function offset(el) {
    let rect = el.getBoundingClientRect();
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return rect.top + scrollTop;
}

function navBarChange() {

    if(window.pageYOffset >= topOffset) {
        navAll.classList.add("whiteBackground", "navShadow");

        navLinksElement.forEach((cur) => {
            cur.classList.add("blueText");
        });

        $(".nav__links--element").hover(function() {
            $(this).addClass("highlightText");
            $(this).removeClass("blueText");
        }, function() {
            $(this).addClass("blueText");
            $(this).removeClass("highlightText");
        });

        //for media query $bp-small
        if(window.innerWidth <= 512) {
            hamburger.classList.add("visible");
        } else if (window.innerWidth > 512) {
            hamburger.classList.remove("visible");
        }
    } 
    else {
        $(".nav__links--element").unbind("mouseenter mouseleave");

        navAll.classList.remove("whiteBackground", "navShadow");
        
        navLinksElement.forEach((cur) => {
            cur.classList.remove("blueText");
        })

        $(".nav__links--element").hover(function() {
            $(this).addClass("blueText");
            $(this).addClass("whiteBackground");
        }, function() {
            $(this).removeClass("blueText");
            $(this).removeClass("whiteBackground");
        });

        //for media query $bp-small
        if(window.innerWidth <= 512) {
            hamburgerTop.classList.remove("navAnimationTop");
            hamburgerMid.classList.remove("navAnimationMid");
            hamburgerBot.classList.remove("navAnimationBot");
            hamburger.classList.remove("visible");
            navLinks.classList.remove("visible");
        }
    }
}