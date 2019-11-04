const body = document.querySelector("body");
const portfolio = document.querySelector(".portfolio");
const portfolioEntries = document.querySelector(".portfolio__entries");
const aboutme = document.querySelector(".aboutme");
const contact = document.querySelector(".contact");
const headerButton = document.querySelector(".header__title--button");
const navAll = document.querySelector(".nav");
const navLinks = document.querySelector(".nav__links");
const navLinksElement = document.querySelectorAll(".nav__links--element");
const hamburger = document.querySelector(".nav__hamburger");
const hamburgerTop = document.querySelector(".nav__hamburger--top");
const hamburgerMid = document.querySelector(".nav__hamburger--mid");
const hamburgerBot = document.querySelector(".nav__hamburger--bot");

//topOffset for the navbar visibility
let topOffset, portfolioHeight, aboutMeHeight, contactHeight;
init();

function init() {
    //initalize the topOffset and change navbar accordingly
    topOffset = offset(portfolio);
    navBarChange();

    //monitor window when scrolling so that navbar can change accordingly
    window.addEventListener("scroll", () => {
        navBarChange();

        if (hamburgerTop.classList.contains("navAnimationTop")) {
            collapseNav();
        }
    });

    //adding resize listener to window
    window.addEventListener("resize", () => {
        //change the topOffset when window is resized and change navbar accordingly
        topOffset = offset(portfolio);
        navBarChange();
        getScrollHeights();
    });

    //adding click listener to hamburger menu
    hamburger.addEventListener("click", function () {

        if (!hamburgerTop.classList.contains("navAnimationTop")) {
            openNav();

        } else if (hamburgerTop.classList.contains("navAnimationTop")) {
            collapseNav();
        }
    });

    //adding click event listeners to each nav element
    navLinksElement.forEach((cur, i) => {
        if (i === 0) {
            cur.addEventListener("click", () => {
                window.scrollTo(0, portfolioHeight);

                if(window.innerWidth <= 512) {
                    collapseNav();
                }
            })
        } else if (i === 1) {
            cur.addEventListener("click", () => {
                window.scrollTo(0, aboutMeHeight);
                
                if(window.innerWidth <= 512) {
                    collapseNav();
                }
            })
        } else if (i === 2) {
            cur.addEventListener("click", () => {
                window.scrollTo(0, contactHeight);
                
                if(window.innerWidth <= 512) {
                    collapseNav();
                }
            })
        }
    })

    headerButton.addEventListener("click", () => {
        window.scrollTo(0, portfolioHeight);
    })

    //when mouse enters image of project, buttons for the site and github repo will appear
    $(".card").mouseenter(function () {
        this.childNodes[3].childNodes[1].style.opacity = 1;
        this.childNodes[3].childNodes[1].style.visibiilty = "visible";
        this.childNodes[3].childNodes[3].style.opacity = 1;
        this.childNodes[3].childNodes[3].style.visibiilty = "visible";
        this.childNodes[1].style.filter = "brightness(60%) blur(1px)";
    });

    //when mouse leaves image of project, buttons for the site and github repo will disappear
    $(".card").mouseleave(function () {
        this.childNodes[3].childNodes[1].style.opacity = 0;
        this.childNodes[3].childNodes[1].style.visibiilty = "invisible";
        this.childNodes[3].childNodes[3].style.opacity = 0;
        this.childNodes[3].childNodes[3].style.visibiilty = "invisible";
        this.childNodes[1].style.filter = "";
    });

    getScrollHeights();
}

//function that gets vertical offset of the element passed in 
function offset(el) {
    let rect = el.getBoundingClientRect();
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return rect.top + scrollTop;
}

//function to initialize the heights to scroll to for each nav element
function getScrollHeights() {
    aboutMeHeight = aboutme.getBoundingClientRect().top + window.scrollY - navAll.offsetHeight;
    contactHeight = contact.getBoundingClientRect().top + window.scrollY - navAll.offsetHeight;
    portfolioHeight = portfolioEntries.getBoundingClientRect().top + window.scrollY - navAll.offsetHeight;
}

function hamburgerToggle() {
    hamburgerTop.classList.toggle("navAnimationTop");
    hamburgerMid.classList.toggle("navAnimationMid");
    hamburgerBot.classList.toggle("navAnimationBot");
}

function collapseNav() {
    hamburgerToggle();
    navLinks.style.height = "0";
    navLinksElement.forEach(cur => {
        cur.classList.remove("visible");
    })
}

function openNav() {
    hamburgerToggle();
    navLinks.style.height = "16vh";
    navLinksElement.forEach(cur => {
        cur.classList.add("visible");
    })
}

function navBarChange() {

    //when scroll is at or below portfolio
    if (window.pageYOffset >= topOffset) {

        navAll.classList.add("whiteBackground", "navShadow");

        navLinksElement.forEach((cur) => {
            // cur.classList.add("blueText");
            cur.style.color = "#acc7dc";
        });

        $(".nav__links--element").hover(function () {
            $(this).css("color", "#62a7de");
        }, function () {
            $(this).css("color", "#acc7dc");
        });

        //for media query $bp-small
        if (window.innerWidth <= 512) {
            hamburger.classList.add("visible");
            hamburgerTop.classList.add("blueBackground");
            hamburgerMid.classList.add("blueBackground");
            hamburgerBot.classList.add("blueBackground");
            hamburgerTop.classList.remove("whiteBackground");
            hamburgerMid.classList.remove("whiteBackground");
            hamburgerBot.classList.remove("whiteBackground");

            if (!hamburgerTop.classList.contains("navAnimationTop")) {
                navLinks.style.height = "0";
            } else {
                navLinks.style.height = "16vh";
            }

        } else {
            hamburger.classList.remove("visible");
            navLinks.style.height = "auto";
        }
    }
    //when scroll is above portfolio
    else {
        $(".nav__links--element").unbind("mouseenter mouseleave");

        navAll.classList.remove("whiteBackground", "navShadow");

        //for media query $bp-small
        if (window.innerWidth <= 512) {
            hamburger.classList.add("visible");
            hamburgerTop.classList.remove("blueBackground");
            hamburgerMid.classList.remove("blueBackground");
            hamburgerBot.classList.remove("blueBackground");
            hamburgerTop.classList.add("whiteBackground");
            hamburgerMid.classList.add("whiteBackground");
            hamburgerBot.classList.add("whiteBackground");
            navLinksElement.forEach((cur) => {
                cur.style.color = "#acc7dc";
            })

            $(".nav__links--element").hover(function () {
                $(this).css("color", "#62a7de");
            }, function () {
                $(this).css("color", "#acc7dc");
            });

            if (!hamburgerTop.classList.contains("navAnimationTop")) {
                navLinks.style.height = "0";
            } else {
                navLinks.style.height = "16vh";
            }

        } else {
            hamburger.classList.remove("visible");
            navLinks.style.height = "auto";
            navLinksElement.forEach((cur) => {
                cur.style.color = "white";
            })

            $(".nav__links--element").hover(function () {
                // $(this).addClass("blueText");
                $(this).addClass("whiteBackground");
                $(this).css("color", "#acc7dc");
            }, function () {
                // $(this).removeClass("blueText");
                $(this).removeClass("whiteBackground");
                $(this).css("color", "white");
            });
        }
    }
}