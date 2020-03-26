const navBarList = document.querySelector("#navBarLinks");
const mobileMenu = document.querySelector(".mobileHamburger");
let hamburgerBool = false;
navBarList.classList.add("animated", "fadeInUp");
navBarList.classList.add("navBarHidden");
mobileMenu.classList.remove('menuOpen');
function toggleMobileNavBar() {
    if (hamburgerBool == false) {
        navBarList.classList.remove("animated", "fadeOutDown");
        navBarList.classList.remove("navBarHidden");
        navBarList.classList.add("animated", "fadeInUp");
        mobileMenu.classList.add("menuOpen");
        hamburgerBool = true;
    } else {
        navBarList.classList.remove("animated", "fadeInUp");
        navBarList.classList.add("animated", "fadeOutDown");
        mobileMenu.classList.remove('menuOpen');
        setTimeout(() => {  navBarList.classList.add("navBarHidden");hamburgerBool = false; }, 350);
    }
}

