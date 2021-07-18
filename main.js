const menuButton = $('.menubutton')
const menu = $('.menu')
const header = $('.header')

var menuActive = false

function slowScroll(id) {
    $('html, body').animate({
        scrollTop: $(id).offset().top - 110
    }, 500);

    if (menuActive) {
        menu.toggleClass('menuSlideBack')
        menuActive = false;
        setTimeout(() => menu.toggleClass('menuSlide menuSlideBack'), 700)
    }
}

$(function () {
    menuButton.click(function () {
        menuButton.toggleClass('menubutton_active')
        if (!menuActive) {
            menu.toggleClass('menuSlide')
            menuActive = true;
        } else {
            menu.toggleClass('menuSlideBack')
            menuActive = false;
            setTimeout(() => menu.toggleClass('menuSlide menuSlideBack'), 700)
        }
    })

    window.addEventListener('scroll', function () {
        var position = window.scrollY
        if (position > 130) {
            header.addClass('onmove')
        } else {
            header.removeClass('onmove')
        }
    }, 500)

})