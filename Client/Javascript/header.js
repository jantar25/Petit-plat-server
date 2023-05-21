const menuBtn = document.querySelector("#menu")
const searchBtn = document.querySelector("#searchBtn") 
const navbar = document.querySelector(".navbar")
const searchForm = document.querySelector(".searchForm")
let toggleSearchBar = false


// Toggle Search Bar
const toggleSearch = () => {
    if(!toggleSearchBar) {
        searchForm.style.display = 'flex';
        searchBtn.style.background = '#f55556';
        toggleSearchBar = true;
    } else {
        searchForm.style.display = 'none';
        searchBtn.style.background = '#eee';
        toggleSearchBar = false;
    }  
}

// toggle Menu Bar
const toggleMenu = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
    searchForm.style.display = 'none';
    searchBtn.style.background = '#eee';
    toggleSearchBar = false;
}

menuBtn.addEventListener('click',toggleMenu)
searchBtn.addEventListener('click',toggleSearch)

