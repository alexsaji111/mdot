function cycleImages() {
    var $active = $('#cycler .active');
    var $next = ($active.next().length > 0) ? $active.next() : $('#cycler img:first');
    $next.css('z-index', 2);
    $active.fadeOut(2000, function() {
        $active.css('z-index', 1).show().removeClass('active');
        $next.css('z-index', 3).addClass('active');
    });
}

$(document).ready(function() {
    setInterval('cycleImages()', 9000);
})

$("#myModal").modal('show');
$("#myModal2").modal('show');

$('a[href*="#"]:not([href="#"])').click(function() {

    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);

        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 100
            }, 1000);
            return false;
        }
    }
});

$(function() {
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 100) {
            $(".header").addClass("active");
            $('.logo').attr('src', 'image/tripmemo_logo_black.png');
        } else {
            $(".header").removeClass("active");
            $('.logo').attr('src', 'image/tripmemo_logo_white.png');
        }
    });
});


/*read more*/
var showChar = 150;
var ellipsestext = "...";
var moretext = "Read more";
var lesstext = "Read less";


$('.more').each(function() {
    var content = $(this).html();

    if (content.length > showChar) {

        var c = content.substr(0, showChar);
        var h = content.substr(showChar, content.length - showChar);

        var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

        $(this).html(html);
    }

});

// $(".morelink").click(function() {
//     if ($(this).hasClass("less")) {
//         $(this).removeClass("less");
//         $(this).html(moretext);
//     } else {
//         $(this).addClass("less");
//         $(this).html(lesstext);
//     }
//     $(this).parent().prev().toggle();
//     $(this).prev().toggle();
//     return false;
// });



/*===Bottom nav show/hide on scroll====*/



/*slider*/

$('#test-species').owlCarousel({
    rtl: false,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1.2
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
});

$('#selectHotel').owlCarousel({
    rtl: false,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
});

$('#select-stay').owlCarousel({
    rtl: false,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1.2
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
});

$('#select-guide').owlCarousel({
    rtl: false,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
});


$('#suggestedConnection').owlCarousel({
    rtl: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    loop: true,
    dots: false,
    nav: true,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
});

/*date range*/


this.buildDatePicker = (startInput, endInput) => {
    const container = document.getElementById('calendar-container');
    const minDate = new Date();
    minDate.setHours(0, 0, 0, 0);

    this.startPicker = new Pikaday({
        bound: false,
        container: container,
        field: startInput,
        firstDay: 1,
        theme: 'calendar__start-wrapper',
        minDate: minDate,
        onSelect: () => {
            this.updateStartDate(this.startPicker.getDate());
        }
    });

    this.endPicker = new Pikaday({
        bound: false,
        container: container,
        field: endInput,
        firstDay: 1,
        theme: 'calendar__end-wrapper',
        minDate: minDate,
        onSelect: () => {
            this.updateEndDate(this.endPicker.getDate());
        }
    });

    this.endPicker.hide();
    this.bindReset(startInput, endInput);
    this.bindMouseMove(endInput, container);
};

this.updateStartDate = (selectedDate) => {
    this.startPicker.hide();
    this.endPicker.setMinDate(selectedDate);
    this.endPicker.setStartRange(selectedDate);
    this.endPicker.gotoDate(selectedDate);
    this.setEndRange(selectedDate);
    this.endPicker.show();
};

this.updateEndDate = (selectedDate) => {
    this.endDate = new Date(selectedDate);
    console.log('set end date');
    console.log(selectedDate);
    this.setEndRange(selectedDate);
}

this.setEndRange = (endDate) => {
    this.endPicker.setEndRange(endDate);
    this.endPicker.draw();
}

this.bindReset = (startInput, endInput) => {
    const reset = document.getElementById('calendar-clear');
    reset.addEventListener('click', (event) => {
        event.preventDefault();

        this.endPicker.setDate(null);
        this.updateEndDate(null);
        endInput.value = null;

        this.startPicker.setDate(null);
        this.updateStartDate(null);
        this.startPicker.gotoDate(new Date());
        startInput.value = null;

        this.endPicker.hide();
        this.startPicker.show();
    });
}

this.bindMouseMove = (endInput, container) => {
    this.target = false;

    document.querySelector('body').addEventListener('mousemove', (btn) => {
        if (!btn.target.classList.contains('pika-button')) {
            if (this.target === true) {
                this.target = false;
                this.setEndRange(this.endPicker.getDate());
            }
        } else {
            this.target = true;
            const pikaBtn = btn.target;
            const pikaDate = new Date(pikaBtn.getAttribute('data-pika-year'), pikaBtn.getAttribute('data-pika-month'), pikaBtn.getAttribute('data-pika-day'));
            this.setEndRange(pikaDate);
        }
    });
}

const start = document.getElementById('calendar-start');
const end = document.getElementById('calendar-end');

this.buildDatePicker(start, end);


/*Lightgallery section*/






/*=================================Search bar================================*/


$(document).ready(function() {
    $('.tour-search').click(function() {
        $(".buttons").show()

    });

});




function showStuff(element) {
    var tabContents = document.getElementsByClassName('tabContent');
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
    }

    // change tabsX into tabs-X in order to find the correct tab content
    var tabContentIdToShow = element.id.replace(/(\d)/g, '-$1');
    document.getElementById(tabContentIdToShow).style.display = 'block';
}


/*date dropper*/
$("input.activity-list").dateDropper({});



$('input[name="activity1"]').click(function() {
    $(this).tab('show');
    $(this).removeClass('active');
});

function menu1() {
    $('[href="#all"]').tab('show');
}

function menu2() {
    $('[href="#accommodation"]').tab('show');
}

function menu3() {
    $('[href="#guiders"]').tab('show');
}

function menu4() {
    $('[href="#rental"]').tab('show');
}

function menu5() {
    $('[href="#itinerary"]').tab('show');
}


$(".toggle-password").click(function() {
    $(this).toggleClass("fa-eye fa-eye-slash");
    input = $(this).parent().find("input");
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});



/*==========pagination===========*/


var items = $(".list-wrapper .list-item");
var numItems = items.length;
var perPage = 4;

items.slice(perPage).hide();

$('#pagination-container').pagination({
    items: numItems,
    itemsOnPage: perPage,
    prevText: "&laquo;",
    nextText: "&raquo;",
    onPageClick: function(pageNumber) {
        var showFrom = perPage * (pageNumber - 1);
        var showTo = showFrom + perPage;
        items.hide().slice(showFrom, showTo).show();
    }
});


$("input[type=text], textarea").mouseover(zoomDisable).mousedown(zoomEnable);

function zoomDisable() {
    $('head meta[name=viewport]').remove();
    $('head').prepend('<meta name="viewport" content="user-scalable=0" />');
}

function zoomEnable() {
    $('head meta[name=viewport]').remove();
    $('head').prepend('<meta name="viewport" content="user-scalable=1" />');
}


/*====================07/03/2022==================*/

$('.ok-button').hide();

$('.edit-button,.ok-button').on('click', function() {

    $('.edit-button,.ok-button').toggle()
});
$('.ok-button2').hide();

$('.edit-button2,.ok-button2').on('click', function() {

    $('.edit-button2,.ok-button2').toggle()
});