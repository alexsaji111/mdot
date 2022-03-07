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
$(document).ready(function() {
    var showChar = 300
    var ellipsestext = "";
    var moretext = "Read More";
    var lesstext = "Read Less";


    $('.more').each(function() {
        var content = $(this).html();

        if (content.length > showChar) {

            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);

            var html = c + '<span class="moreellipses">' + ellipsestext + '</span><span class="morecontent"><span>' + h + '</span><a href="" class="morelink">' + moretext + '</a></span>';

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
$('#selectGuide').owlCarousel({
    rtl: false,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    loop: true,
    margin: 10,
    nav: false,
    // navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    dots: false,
    responsive: {
        0: {
            items: 1.2
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});
$('#specimen-itinerary').owlCarousel({
    rtl: false,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    loop: true,
    margin: 10,
    // nav: false,
    // navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
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
$('#suggestedConnections').owlCarousel({
    rtl: false,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    loop: true,
    margin: 10,
    nav: false,
    // navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    dots: false,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
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

// otp
function getCodeBoxElement(index) {
    return document.getElementById('codeBox' + index);
}

function onKeyUpEvent(index, event) {
    const eventCode = event.which || event.keyCode;
    if (getCodeBoxElement(index).value.length === 1) {
        if (index !== 6) {
            getCodeBoxElement(index + 1).focus();
        } else {
            getCodeBoxElement(index).blur();
            // Submit code
            console.log('submit code ');
        }
    }
    if (eventCode === 8 && index !== 1) {
        getCodeBoxElement(index - 1).focus();
    }
}

function onFocusEvent(index) {
    for (item = 1; item < index; item++) {
        const currentElement = getCodeBoxElement(item);
        if (!currentElement.value) {
            currentElement.focus();
            break;
        }
    }
}

// 2 

function getCodeBoxElement(index) {
    return document.getElementById('codeBox' + index);
}

function onKeyUpEvent1(index, event) {
    const eventCode = event.which || event.keyCode;
    if (getCodeBoxElement(index).value.length === 1) {
        if (index !== 6) {
            getCodeBoxElement(index + 1).focus();
        } else {
            getCodeBoxElement(index).blur();
            // Submit code
            console.log('submit code ');
        }
    }
    if (eventCode === 8 && index !== 1) {
        getCodeBoxElement1(index - 1).focus();
    }
}

function onFocusEvent1(index) {
    for (item = 1; item < index; item++) {
        const currentElement = getCodeBoxElement(item);
        if (!currentElement.value) {
            currentElement.focus();
            break;
        }
    }
}



/*Payment*/

$(function() {
    var inputClicked;
    $("#accordion").accordion({
        beforeActivate: function(evt, ui) {
            inputClicked = $('input', evt.currentTarget)
                //$('input', evt.currentTarget).prop("checked", "checked");
        },
        activate: function(evt, ui) {
            inputClicked.prop("checked", "checked");
        }
    });
});

/*radio button*/
$('input[name=radio-group]').click(function() {
    if (this.id == "cards") {
        $("#show-cards").show();
    } else {
        $("#show-cards").hide();
    }
});

/*============new enquiry list hide===========*/

$(".lists").click(function(e) {
    e.preventDefault();
    $(".new-list").hide();
});



/*slider*/

$('#test-species').owlCarousel({
    rtl: false,
    autoplay: true,
    autoplayTimeout: 5000,
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
            items: 1
        }
    }
});

$('#day1-arrival').owlCarousel({
    rtl: false,
    autoplay: true,
    autoplayTimeout: 5000,
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
            items: 1
        }
    }
});

$('#day1-destination').owlCarousel({
    rtl: false,
    autoplay: true,
    autoplayTimeout: 5000,
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
            items: 1
        }
    }
});

$('#day2-destination').owlCarousel({
    rtl: false,
    autoplay: true,
    autoplayTimeout: 5000,
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
            items: 1
        }
    }
});
$('#day2-arrival').owlCarousel({
    rtl: false,
    autoplay: true,
    autoplayTimeout: 5000,
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
            items: 1
        }
    }
});

$('#day3-arrival').owlCarousel({
    rtl: false,
    autoplay: true,
    autoplayTimeout: 5000,
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
            items: 1
        }
    }
});
$('#day3-destination').owlCarousel({
    rtl: false,
    autoplay: true,
    autoplayTimeout: 5000,
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
            items: 1
        }
    }
});

$(function() {
    $('#chatbox').draggable({ scroll: true, cursor: "move" });
});