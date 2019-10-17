let portfolio = document.querySelector(".portfolio");
let navAll = document.querySelector(".nav");
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
});

hamburger.addEventListener("click", function() {
    hamburgerTop.classList.toggle("navAnimationTop");
    hamburgerMid.classList.toggle("navAnimationMid");
    hamburgerBot.classList.toggle("navAnimationBot");
});

//function that gets vertical offset of portfolio 
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

        hamburgerMid.classList.add("blueBackground");
        hamburgerBot.classList.add("blueBackground");
        hamburgerTop.classList.add("blueBackground");

        $(".nav__links--element").hover(function() {
            $(this).addClass("highlightText");
            $(this).removeClass("blueText");
        }, function() {
            $(this).addClass("blueText");
            $(this).removeClass("highlightText");
        });
    } 
    else {
        $(".nav__links--element").unbind("mouseenter mouseleave");

        navAll.classList.remove("whiteBackground", "navShadow");
        
        navLinksElement.forEach((cur) => {
            cur.classList.remove("blueText");
        })

        hamburgerTop.classList.remove("blueBackground");
        hamburgerMid.classList.remove("blueBackground");
        hamburgerBot.classList.remove("blueBackground");

        $(".nav__links--element").hover(function() {
            $(this).addClass("blueText");
            $(this).addClass("whiteBackground");
        }, function() {
            $(this).removeClass("blueText");
            $(this).removeClass("whiteBackground");
        });
    }
}