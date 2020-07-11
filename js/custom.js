var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 500);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";

}

window.onscroll = function(){navFunction()};

var navbar = document.getElementById("mainNav");
var sticky = 100;
function navFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    }
    else {
        navbar.classList.remove("sticky");
    }
}


jQuery(document).ready(function($) {

    "use strict";
    

    /* ==============================================
    Back to top
    =============================================== */

    jQuery(".dmtop").click(function () {
        jQuery("body, html").animate({
            scrollTop: 0
        }, 600);
    });

    /*========================================
    navbar
    ========================================*/

    $('.navbar-nav>li>a').on('click', function (){
        $('.navbar-collapse').collapse('hide');
    })




    $(document).ready(function() {
        $("#owl-services").owlCarousel({
            items: 3,
            autoplay: true,
            autoplayTimeout: 3000,
            loop: true,
            animateIn: 'slideInRight',
            animateOut: 'slideOutLeft',
        });
    });

    /* ==============================================
    lightbox
    =============================================== */

    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        alwaysShowNavOnTouchDevices: true,
    });
    
    
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 1) {
            jQuery('.dmtop').css({
                bottom: "10px"
            })
        } else {
            jQuery('.dmtop').css({
                bottom: "-100px"
            });
        }
    });

    
	/*--/ Star Typed /--*/
	if ($('.text-slider').length == 1) {
        var typed_strings = $('.text-slider-items').text();
        var typed = new Typed('.text-slider', {
            strings: typed_strings.split(','),
            typeSpeed: 80,
            loop: true,
            backDelay: 1100,
            backSpeed: 30
        });
    }

    // Counter
    $('.counter-count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration:10000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });


    
});



/*==============================
FUNCTION TO VALIDATE MAIL FORM
=============================== */
function validate(form) {
    if (form.name.value == "") {
        alert("Please provide your name!");
        form.name.focus();
        return false;
    }

    if (form.email.value == "") {
        alert("Please provide your email!");
        form.email.focus();
        return false;
    }

    validateEmail(form);

    if (form.subject.value == "") {
        alert("Please provide subject!");
        form.subject.focus();
        return false;
    }

    if (form.message.value == "") {
        alert("Please provide message to send!");
        form.message.focus();
        return false;
    }
}

function validateEmail(form) {
    var emailID = form.email.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");

    if (atpos < 1 || (dotpos - atpos < 2)) {
        alert("Please enter correct email ID!");
        form.email.focus();
        return false;
    }
    return (true);
}