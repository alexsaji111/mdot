/*slider*/


$('.slider').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace) {
        return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
}).owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: true
});


$(document).ready(function() {
    var outerCarousel = $('#outer-carousel');
    outerCarousel.owlCarousel({
        loop: true,
        center: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        items: 1,
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

    var innerCarousel = $('#inner-carousel, #inner-carousel1, #inner-carousel2');
    innerCarousel.owlCarousel({
        loop: true,
        center: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        items: 1,
        nav: false,
        dots: false,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false
    });


});

$('#test-species').owlCarousel({
    rtl: false,
    autoplay: true,
    autoplayTimeout: 2000,
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

$('#test-tours').owlCarousel({
    rtl: false,
    autoplay: true,
    autoplayTimeout: 2000,
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

$('#guestbook').owlCarousel({
    rtl: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    loop: true,
    margin: 10,
    nav: false,
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



/*Lightgallery section*/

$('#lightgallery').lightGallery();

$(".pushme-with-color").click(function() {
    $(this).text(" ✓ In Bucket List");
    $('#add-btn-remove').hide()
});


/*==============start rating===========*/

$(".rateYo").each(function(e) {

    var language = "english";
    var rating = $(this).attr("data-rating");
    var ratedFill = $("#rateYo").rateYo("option", "ratedFill");

    $(this).rateYo({
        onSet: function(rating) {
            if (language === "arabic") {
                $(this).next().val(ChngRatevaluesAr[rating]);
            } else {
                $(this).next().val(ChngRatevaluesEn[rating]);
            }
            ratingFunc(rating, $(this).next().next().val());
        },
        rating: rating,
        starWidth: "20px",
        numStars: 5,
        fullStar: true,
        normalFill: "#f2f2f2",
        spacing: "10px",
        precision: 2,

    });
});
$(".rateYo").rateYo("option", "ratedFill", "#f5ce1c");



function ratingFunc(rating, bookid, lang) {;
    if (lang != null) {
        language = lang;
    };
}

var clicks = 10;

function counter() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
};


$('#appendReview').on('click', function() {
    $('#list-items').append(' <div class="reviews border-bottom pb-3 mt-4" id="nano"><div class="row"> <div class="col-2 pr-0 d-flex align-items-center justify-content-center"> <img class="img-fluid" src="./image/user.png" width="48" alt="">  </div> <div class="col-10 pl-0 "> <p>Tommy George</p> <div class="rating-stars"> <i class="fa fa-star yellow" aria-hidden="true"></i>   <i class="fa fa-star yellow" aria-hidden="true"></i> <i class="fa fa-star yellow" aria-hidden="true"></i>  <i class="fa fa-star gray" aria-hidden="true"></i>  <i class="fa fa-star gray" aria-hidden="true"></i>  </div>  </div> </div><div class="row"> <div class="col-2"></div> <div class="col-10 pl-0">  <p class="pt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium nostrum doloremque neque dignissimos obcaecati in quos deleniti est doloribus quibusdam beatae id officiis, asperiores voluptate aliquid iusto   quisquam, adipisci saepe?</p>  </div></div>   </div>');
});


/*Activity months*/

function setBestMonthActivityId(activityId) {
    $('#activityId').val(activityId);
    $("#reviewId").val(0);
}

function setBestMonthActive(value) {
    if ($('#bestMonth' + value).prop("checked")) {
        $('#bestMonthth' + value).addClass("active");
    } else {
        $('#bestMonthth' + value).removeClass("active");
    }
}

function addDestinationActivityBestMonths() {

    var ckeckFlag = 0;

    $('.TFtable').find('input[type=checkbox]:checked').each(function() {
        ckeckFlag++;
    });

    if (ckeckFlag == 0) {
        $('.TFtable').focus();
        toastr.warning('Please choose the months', 'Warning Alert', { timeOut: 15000 });
        return false;
    }


    if ($("#destinationId").val() != '' && $("#activityId").val() != '' && ckeckFlag != 0) {

        $('.loader').show();

        $(".loader").css('display', 'flex');

        var formData = new FormData();

        formData.append('destinationId', $("#destinationId").val());
        formData.append('activityId', $("#activityId").val());
        formData.append('memberId', $("#memberId").val());

        $('.TFtable').find('input[type=checkbox]:checked').each(function() {
            formData.append('bestMonth[]', this.value);
        });

        $.ajax({

            url: "https://tripmemo.io/TripMemo_Web/ajax/destinations/add_activity_best_months",

            type: "POST", // Type of request to be send, called as method

            data: formData, // Data sent to server, a set of key/value pairs (i.e. form fields and values)

            contentType: false, // The content type used when sending data to the server.

            cache: false, // To unable request pages to be cached

            processData: false, // To send DOMDocument or non processed data file it is set to false

            //dataType : "JSON",

            success: function(data) {
                $('.loader').hide();
                if (data != 0) {
                    toastr.success('Best months added successfully', 'Success Alert', { timeOut: 15000 });
                    $('#bestMonthsModalClose').click();
                    window.location.reload();
                }
            }
        });
    }
}



/*==============read more==================*/

var showChar = 300;
var ellipsestext = "...";
var moretext = "Read more";
var lesstext = "Read less";


$('.more2').each(function() {
    var content = $(this).html();

    if (content.length > showChar) {

        var c = content.substr(0, showChar);
        var h = content.substr(showChar, content.length - showChar);

        var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

        $(this).html(html);
    }

});

$(".morelink2").click(function() {
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



$(function() {
    $('th').click(function() {
        $(this).toggleClass("red-cell")
    });
});

/*============calander check in activities===========*/

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
$('#r11').on('click', function() {
    $(this).parent().find('a').trigger('click')
})

$('#r12').on('click', function() {
    $(this).parent().find('a').trigger('click')
})
$('#r13').on('click', function() {
    $(this).parent().find('a').trigger('click')
})
$('#r14').on('click', function() {
    $(this).parent().find('a').trigger('click')
})


/*================Contribute to the page other option selection==================*/
function yesnoCheck(that) {
    if (that.value == "74") {
        document.getElementById("ifYes").style.display = "block";
    } else {
        document.getElementById("ifYes").style.display = "none";
    }
}

$("fa-heart").click(function(e) {
    e.preventDefault();
    $(this).css("color", "red")
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