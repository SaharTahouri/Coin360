//--------------------------------------burger menu---------------------------------------------

const burgerBtn = document.querySelector(".burger-menu-btn");
const mobileMenu = document.querySelector(".mobile-menu-wrapper");

burgerBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("d-none");
});

document.querySelector(".close-img").addEventListener("click", () => {
    mobileMenu.classList.add("d-none");
});

//------------------------------------burger menu items------------------------------------------

const menuItem = document.querySelectorAll(".mobile-menu-item");
const menuSubItem = document.querySelectorAll(".mobile-menu-sub-item");
const menuArrow = document.querySelectorAll(".mobile-menu-item-title img");

menuItem[0].addEventListener("click", () => {
    if (menuSubItem[0].classList.contains("d-none")) {
        menuSubItem[0].classList.remove("d-none");
        menuSubItem[0].style.display = "flex";
        menuArrow[0].style.transform = "rotate(180deg)";
    } else {
        menuSubItem[0].classList.add("d-none");
        menuSubItem[0].style.display = "none";
        menuArrow[0].style.transform = "rotate(360deg)";
    }
});

menuItem[1].addEventListener("click", () => {
    if (menuSubItem[1].classList.contains("d-none")) {
        menuSubItem[1].classList.remove("d-none");
        menuSubItem[1].style.display = "flex";
        menuArrow[1].style.transform = "rotate(180deg)";
    } else {
        menuSubItem[1].classList.add("d-none");
        menuSubItem[1].style.display = "none";
        menuArrow[1].style.transform = "rotate(360deg)";
    }
});

menuItem[2].addEventListener("click", () => {
    if (menuSubItem[2].classList.contains("d-none")) {
        menuSubItem[2].classList.remove("d-none");
        menuSubItem[2].style.display = "flex";
        menuArrow[2].style.transform = "rotate(180deg)";
    } else {
        menuSubItem[2].classList.add("d-none");
        menuSubItem[2].style.display = "none";
        menuArrow[2].style.transform = "rotate(360deg)";
    }
});

//--------------------------------------toggle filters---------------------------------------------

const toggleFilters = document.querySelector(".toggle-filters-btn");
const toggleFiltersIcon = document.querySelector(".toggle-filters-btn span img");
const filtersRibbon = document.querySelector(".filters-wrapper");

toggleFilters.addEventListener("click", () => {
    if (filtersRibbon.classList.contains("filters-wrapper-transformed") === false) {
        filtersRibbon.classList.add("filters-wrapper-transformed");
        toggleFiltersIcon.style.transform = "rotate(180deg)";
    } else {
        filtersRibbon.classList.remove("filters-wrapper-transformed");
        toggleFiltersIcon.style.transform = "rotate(360deg)";
    }
});

const windowSize = window.matchMedia("(max-width: 992px)");

windowSize.addEventListener("change", () => {
    if (windowSize.matches) {
        toggleFilters.addEventListener("click", () => {
            if (filtersRibbon.classList.contains("filters-wrapper-transformed-small") === false) {
                filtersRibbon.classList.add("filters-wrapper-transformed-small");
                toggleFiltersIcon.style.transform = "rotate(180deg)";
                document.querySelector(".tools-wrapper").style.left = "unset";
                document.querySelector(".tools-wrapper").style.right = "3px";
            } else {
                filtersRibbon.classList.remove("filters-wrapper-transformed-small");
                toggleFiltersIcon.style.transform = "rotate(360deg)";
                document.querySelector(".tools-wrapper").style.left = "36px";
                document.querySelector(".tools-wrapper").style.right = "unset";
            }
        });
    }
});

//--------------------------------------toggle sidebar---------------------------------------------

const toggleSidebar = document.querySelector(".toggle-sidebar");
const sidebar1 = document.querySelector(".news-feed-wrapper");
const sidebar2 = document.querySelector(".sidebar-bottom");
const coinStatus = document.querySelector(".coin-status");

toggleSidebar.addEventListener("click", () => {
    if (sidebar1.classList.contains("d-none") === false) {
        sidebar1.classList.add("d-none");
        sidebar2.classList.add("d-none");
        coinStatus.classList.add("coin-status-side-closed");
    } else {
        sidebar1.classList.remove("d-none");
        sidebar2.classList.remove("d-none");
        coinStatus.classList.remove("coin-status-side-closed");
    }
});

//--------------------------------------close sidebar items---------------------------------------------

const minus = document.querySelectorAll(".sidebar-title img");
const newsWrapper = document.querySelector(".news-wrapper");
const statisticsWrapper = document.querySelector(".statistics-wrapper");

minus[0].addEventListener("click", () => {
    if (newsWrapper.classList.contains("news-wrapper-closed") === false) {
        newsWrapper.classList.add("news-wrapper-closed");
        minus[0].src = "images/icon-plus.svg";
    } else {
        newsWrapper.classList.remove("news-wrapper-closed");
        minus[0].src = "images/icon-minus.svg";
    }
});

minus[1].addEventListener("click", () => {
    if (statisticsWrapper.classList.contains("statistics-wrapper-closed") === false) {
        statisticsWrapper.classList.add("statistics-wrapper-closed");
        minus[1].src = "images/icon-plus.svg";
    } else {
        statisticsWrapper.classList.remove("statistics-wrapper-closed");
        minus[1].src = "images/icon-minus.svg";
    }
});