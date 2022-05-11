let opan = document.querySelector('.menu-open')
let menu = document.querySelector('.menu-list')
let overly = document.querySelector('.overly')
let close = document.querySelector('.close-menu')


opan.addEventListener('click', () => {
    menu.classList.add('left-0')
    overly.classList.add('opacity')
})

close.addEventListener('click', () => {
    menu.classList.remove('left-0')
    overly.classList.remove('opacity')
})





// light box
$(function () {

    // Lightbox function
    var lightbox = function () {
        var src = $('.active').attr('src');
        $('#lightbox img').attr('src', src);
    }

    // Image is clicked
    $('.demo-item .demo-slide').click(function () {
        $('#lightbox').css('display', 'flex');
        $(this).find('img').addClass('active');
        lightbox();
    });

    // Close button clicked
    $('.close').click(function () {
        $('.demo-item img').removeClass('active');
        $('#lightbox').hide();
    });

    // Next button clicked
    $('.next').click(function () {
        if ($('.active').parent('.demo-item').children('.demo-slide:last').children('img').hasClass('active')) {
            $('.active').removeClass().parent('.demo-item').children('.demo-slide:first').children('img').addClass('active');
            lightbox();
        } else {
            $('.active').removeClass().parent('.demo-slide').next('.demo-slide img').addClass('active');
            lightbox();
        }
    });

    // Prev button clicked
    $('.prev').click(function () {
        if ($('.active').parent('.demo-item').children('.demo-slide').find('img:last').hasClass('active')) {
            $('.active').removeClass().parent('.demo-item').children('img:last').addClass('active');
            lightbox();
        } else {
            $('.active').removeClass().prev('.demo-item img').addClass('active');
            lightbox();
        }
    });

});