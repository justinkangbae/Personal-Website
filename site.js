let portfolio = document.querySelector(".portfolio");
let navAll = document.querySelector(".nav");
let navLinksElement = document.querySelectorAll(".nav__links--element");
let topOffset = offset(portfolio);

window.addEventListener("scroll", () => {
    if(window.pageYOffset >= topOffset) {
        navAll.classList.add("whiteBackground", "navShadow");

        navLinksElement.forEach((cur) => {
            cur.classList.add("blueText");
        });
    } 
    else {
        navAll.classList.remove("whiteBackground", "navShadow");
        
        navLinksElement.forEach((cur) => {
            cur.classList.remove("blueText");
        });
    }
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