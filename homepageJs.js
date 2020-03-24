const navBarList = document.querySelector("#navBarLinks");
const mobileMenu = document.querySelector(".mobileHamburger");
let hamburgerBool = true;
function toggleMobileNavBar() {
    if (hamburgerBool == false) {
        navBarList.classList.add("animated", "fadeInUp");
        navBarList.classList.remove("navBarHidden");
        mobileMenu.classList.add("menuOpen");
        hamburgerBool = true;
    } else {
        navBarList.classList.add("animated", "fadeInUp");
        navBarList.classList.add("navBarHidden");
        mobileMenu.classList.remove('menuOpen');
        hamburgerBool = false;
    }
}

