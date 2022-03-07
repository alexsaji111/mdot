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
            $('.logo').attr('src', 'image/tripmemo_logo.png');
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

$(".morelink").click(function() {
    if ($(this).hasClass("less")) {
        $(this).removeClass("less");
        $(this).html(moretext);
    } else {
        $(this).addClass("less");
        $(this).html(lesstext);
    }
    $(this).parent().prev().toggle();
    $(this).prev().toggle();
    return false;
});

/*===view more====*/
var showChar = 153;
var ellipsestext = "...";
var moretext1 = "View more";
var lesstext1 = "View less";



$('.more1').each(function() {
    var content = $(this).html();

    if (content.length > showChar) {

        var c = content.substr(0, showChar);
        var h = content.substr(showChar, content.length - showChar);

        var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink1">' + moretext1 + '</a></span>';

        $(this).html(html);
    }

});

$(".morelink1").click(function() {
    if ($(this).hasClass("less")) {
        $(this).removeClass("less");
        $(this).html(moretext1);
    } else {
        $(this).addClass("less");
        $(this).html(lesstext1);
    }
    $(this).parent().prev().toggle();
    $(this).prev().toggle();
    return false;
});


/*===Bottom nav show/hide on scroll====*/

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//         document.getElementById("navbar").style.bottom = "0";
//     } else {
//         document.getElementById("navbar").style.bottom = "-80px";
//     }
//     prevScrollpos = currentScrollPos;
// }




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
    nav: true,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
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
$('#selectRooms').owlCarousel({
    rtl: false,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    loop: true,
    margin: 10,
    nav: true,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
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



$('#room1').owlCarousel({
    rtl: false,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    loop: true,
    margin: 10,

    nav: true,
    navText: [$('.am-next2'), $('.am-prev2')],
    responsive: {
        0: {
            items: 1
        },
        420: {
            items: 1
        },
        520: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

$('#selectRestaurents').owlCarousel({
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

$('#truView-slider').owlCarousel({
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
            items: 1
        },
        1000: {
            items: 4
        }
    }
});

$(".owl-carousel").owlCarousel({
    nav: true,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    navElement: 'span',
    dots: false,
    autoplay: false,
    autoplayTimeout: 7000,
    autoplayHoverPause: true,
    thumbs: true,
    thumbsPrerendered: true,
    loop: false,
    rewind: true,
    mouseDrag: true,
    touchDrag: true,
    items: 1
});


$(".owl-carousel--nested").owlCarousel({
    nav: false,
    navElement: 'span',
    dots: true,
    loop: false,
    rewind: true,
    autoplay: true,
    autoplayTimeout: 3000,
    items: 3,
    mouseDrag: false,
    touchDrag: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
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


$('#lightgallery').lightGallery();


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

/*=============whatsApp check============*/
function valueChanged() {
    if ($('.whatsappCheck').is(":checked"))
        $(".whatsappfiled").hide();
    else
        $(".whatsappfiled").show();
}