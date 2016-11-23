$(function ($) {
    $("#birthdate").mask("99/99/9999", {
        placeholder: "mm/dd/yyyy"
    });
    $("#gradDate").mask("99/99/9999", {
        placeholder: "mm/dd/yyyy"
    });

    $("#phone").mask("(999) 999-9999");
    $("#tin").mask("99-9999999");
    $("#socialSecurity").mask("999-99-9999");
});

$('input').focus(function () {
    NProgress.start();
    NProgress.done();
});

$(function () {
    $('#income').maskMoney(),
    $('#income2').maskMoney()
});

$('input.floatlabel').floatlabel();

$('.scroll').jscroll({
    loadingHtml: '<center><img src="Preloader_1.gif" alt="Loading" /> </center>',
    autoTrigger: false,
    nextSelector: '.newQuestion'
});

$(document).ready(function () {
    $.viewMap = {
        '0': $([]),
        'view1': $('#view1'),
        'student': $('#student'),
        'view3': $('#view3')
    };
    $('#viewSelector').change(function () {
        $.each($.viewMap, function () {
            $(this).hide();
        });
        $.viewMap[$(this).val()].fadeIn();
    });
});


$(document).ready(function () {
    $.schoolMap = {
        '0': $([]),
        'ged': $('#ged'),
        'highSchool': $('#highSchool'),
        'someCollege': $('#someCollege'),
        'associates': $('#associates'),
        'bachelors': $('#bachelors'),
        'graduate': $('#graduate'),
        'doctorate': $('#doctorate')
    };

    $('#schooling').change(function () {
        // hide all
        $.each($.schoolMap, function () {
            $(this).hide();
        });
        // show current
        $.schoolMap[$(this).val()].fadeIn();
    });
});

$(document).ready(function () {
    $.firstCardMap = {
        '0': $([]),
        'yes': $('#thanks'),
    };

    $('#firstCard2').change(function () {
        // hide all
        $.each($.firstCardMap, function () {
            $(this).hide();
        });
        // show current
        $.firstCardMap[$(this).val()].fadeIn();
    });
});


$('#schedule').dependsOn('#subprimeOccupation', ['Employed']);
$('#schedule').dependsOn('#Employed', ['Employed']);


$('#Own').dependsOn('#rentMortgage', ['Own']);
$('#Rent').dependsOn('#rentMortgage', ['Rent']);


$('#emailInput').click(function () {
    $('.addressWant').hide('100'),
    $('.birthday').hide('100'),
    $('.needThis').hide('100'),
    $('.emailWant').show('300');
});

$('#firstName').click(function () {
    $('.emailWant').hide('100'),
    $('.birthday').hide('100'),
    $('.needThis').hide('100'),
    $('.addressWant').show('300');
});

$('#birthdate').click(function () {
    $('.addressWant').hide('300'),
    $('.emailWant').hide('100'),
    $('.needThis').hide('100'),
    $('.birthday').show('300');
});

$('#socialSecurity').focusin(function () {
    $('.birthday').hide('100'),
    $('.addressWant').hide('100'),
    $('.emailWant').hide('100'),
    $('.needThis').slideDown('300');
});

$('#socialSecurity').focusout(function () {
    $('.needThis').hide('100')
});



$('#firstCard').click(function () {
    $('.birthday').hide('100'),
    $('.addressWant').hide('100'),
    $('.emailWant').hide('100'),
    $('.needThis').hide('100'),
    $('.whyOften2').show('300');
});

$('#changeApplication').click(function () {
    $('.cardHero').removeClass('ventureCard');
    $('.cardHero').addClass('journeyCard');
    $('#cardSteering').slideToggle();
    $('html, body').animate({
        scrollTop: $(".cardHero").offset().top
    }, 200);
});

$('#payOff').focus(function () {
    $('#applyBtn').fadeIn();
});

$('#howMuchOf').focusin(function () {
    $('.whyOften2').animateCSS('fadeOutDown').fadeOut('3000');
});


$('#applyNow').click(function () {
    $('#approvedBottom').animateCSS('fadeInUp').fadeIn('3000');
});


$('#optional').focusin(function () {
    $('#optionalWhy').fadeIn('6000');
});

$('#income2').focusin(function () {
    $('#applyBtn').animateCSS('zoomIn');
});


$('#income3').focusin(function () {
    $('.annualIncome').fadeIn('6000');
});