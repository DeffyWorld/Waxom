window.addEventListener('DOMContentLoaded', function() {


    'use strict';

    // Slider
    var swiper = new Swiper('.header__slider', {
        navigation: {
            nextEl: '.header__slider_button-next',
            prevEl: '.header__slider_button-prev',
        },
        pagination: {
            el: '.header__slider_pagination',
        },
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
        loop: true,
        speed: 600,
    });





    // Hamburger
    let hamburger = document.querySelector('.header__nav_hamburger'),
        menu = document.querySelector('.header__nav_hamburger-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('is-active');
        menu.classList.toggle('header__nav_hamburger-menu-active');
    });





    // Search
    let searchBox = document.querySelector('.header__nav_search'),
        searchBtn = document.querySelector('.header__nav_search-btn');

    searchBtn.addEventListener('click', function() {
        searchBox.classList.toggle('header__nav_search-active');
        searchBtn.classList.toggle('header__nav_search-active-btn');
    });





    // Portfolio tabs
    let tabs = document.getElementsByClassName('portfolio__tabs_item'),
        tabcontents = document.getElementsByClassName('portfolio__tab-content_item');


    function removePortfolioActives() {
        for (let i = 0; i < tabs.length; i++) {
            if (tabs[i].classList.contains('portfolio__tabs_item-active')) {
                tabs[i].classList.remove('portfolio__tabs_item-active');
            }
            if (tabcontents[i].classList.contains('portfolio__tab-content_item-active')) {
                tabcontents[i].classList.remove('portfolio__tab-content_item-active');
            }
        }
    }

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function() {
            removePortfolioActives();
            this.classList.add('portfolio__tabs_item-active');
            tabcontents[i].classList.add('portfolio__tab-content_item-active');
        });
    }





    // Projects tabs
    let projectsTabs = document.getElementsByClassName('projects__tabs_item'),
        projectsTabContents = document.getElementsByClassName('projects__tab-content_item'),
        webDesigns = document.getElementsByClassName('web-design'),
        mobileApps = document.getElementsByClassName('mobile-app'),
        illustrations = document.getElementsByClassName('illustration'),
        photographys = document.getElementsByClassName('photography');


    function removeTabsActives() {
        for (let i = 0; i < projectsTabs.length; i++) {
            if (projectsTabs[i].classList.contains('projects__tabs_item-active')) {
                projectsTabs[i].classList.remove('projects__tabs_item-active');
            }
        }
    }
    function removeTabContentsActives() {
        for (let i = 0; i < projectsTabContents.length; i++) {
            if (projectsTabContents[i].classList.contains('projects__tab-content_item-active')) {
                projectsTabContents[i].classList.remove('projects__tab-content_item-active');
            }
        }
    }

    
    for (let i = 0; i < projectsTabs.length; i++) {
        projectsTabs[i].addEventListener('click', function() {
            removeTabsActives();
            removeTabContentsActives();
            this.classList.add('projects__tabs_item-active');
            switch(i) {
                case 1:
                    for (let i = 0; i < webDesigns.length; i++) {
                        webDesigns[i].classList.add('projects__tab-content_item-active');
                    }
                    break;
                case 2:
                    for (let i = 0; i < mobileApps.length; i++) {
                        mobileApps[i].classList.add('projects__tab-content_item-active');
                    }
                    break;
                case 3:
                    for (let i = 0; i < illustrations.length; i++) {
                        illustrations[i].classList.add('projects__tab-content_item-active');
                    }
                    break;
                case 4:
                    for (let i = 0; i < photographys.length; i++) {
                        photographys[i].classList.add('projects__tab-content_item-active');
                    }
                    break;
                default:
                    for (let i = 0; i < projectsTabContents.length; i++) {
                        projectsTabContents[i].classList.add('projects__tab-content_item-active');
                    }
                    break;
            }
        });
    }





    // Play modal

    let playButton = document.querySelector('.video__icon'),
        playModal = document.querySelector('.video__player'),
        playClose = document.querySelector('.video__player_close');

    playButton.addEventListener('click', function () {
        playModal.classList.add('video__player-active');
        document.body.style.overflow = 'hidden'; 
    });
    playClose.addEventListener('click', function () {
        playModal.classList.remove('video__player-active');
        document.body.style.overflow = ''; 
    });


});