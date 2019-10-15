let portfolio = document.querySelector(".portfolio");
let navAll = document.querySelector(".nav");
let navLinksElement = document.querySelectorAll(".nav__links--element");
let topOffset = offset(portfolio);
navBarChange();

window.addEventListener("scroll", () => {
    navBarChange();
});

window.addEventListener("resize", () => {
    topOffset = offset(portfolio);
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

        $(".nav__links--element").hover(function() {
            $(this).addClass("blueText");
            $(this).addClass("whiteBackground");
        }, function() {
            $(this).removeClass("blueText");
            $(this).removeClass("whiteBackground");
        });
    }
}