const navSlide = () => {
    const burger = document.querySelector('.burger-box');
    const nav = document.querySelector('.navigation__list');

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('navigation-active');
    });
}

function initMap(){

    var location = {lat: 25.684245, lng: -100.315929};
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: location
    });
}



navSlide();


