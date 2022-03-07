/*progress bar*/

let actual = 0;
let previous = 0;

$(".next").click(function() {
    if (actual == 0) {
        actual++;
        $('.stage' + actual).show();
        $('.stage' + previous).hide();
        $('.bar' + actual).addClass('active');
    } else {
        previous = actual;
        actual++;
        $('.stage' + actual).show();
        $('.stage' + previous).hide();
        $('.bar' + actual).addClass('active');
    }
});

$(".previous").click(function() {
    if (previous == 0) {
        actual = previous;
        $('.stage' + actual).show();
        $('.stage' + (actual + 1)).hide();
        $('.bar' + (actual + 1)).removeClass('active');
    } else {
        actual = previous;
        previous--;
        $('.stage' + actual).show();
        $('.stage' + (actual + 1)).hide();
        $('.bar' + (actual + 1)).removeClass('active');
    }
});

/*Add content*/
$('.add-check').click(function() {
    var valu = $(this).siblings('.add-check-field').val();
    console.log(valu);
    $(this).parent().parent().children('.demo1 .box-list-item').append("<label><input type='checkbox' name='Cuisine" + valu + "' value=" + valu + " /><span>" + valu + "</span> </label>");

});
$('.add-check-service').click(function() {
    var valu = $(this).siblings('.add-check-field').val();
    console.log(valu);
    $(this).parent().parent().children('.demo1 .box-list-item').append("<label><input type='checkbox' name='services" + valu + "' value=" + valu + " /><span>" + valu + "</span> </label>");

});
$('.add-check-destination').click(function() {
    var valu = $(this).siblings('.add-check-field').val();
    console.log(valu);
    $(this).parent().parent().children('.destination-box .box-item').append("<label><input type='checkbox' name='Cuisine" + valu + "' value=" + valu + " /><span>" + valu + "</span> </label>");

});

/*close button*/

$(".invoice-close").click(function() {
    $(this).parent().remove();
})

/*Add invoice bar*/
$("#addinvoice").click(function() {
    $("#container").append('<div class="band d-flex flex-wrap"><input class="mr-auto w-auto p-2" type="text" value="" placeholder="Title Goes Here"><input class="mr-4 w-auto p-2 invoice-txt" type="text" value="" placeholder="2500.00"><i class="far fa-times-circle invoice-close"></i></div>');
    $(".invoice-close").click(function() {
        $(this).parent().remove();
    })
});

/*Add new species*/
$(".close-chk").click(function() {
    $(this).parent().remove();
})
$("#addspecies").click(function() {
    var values = $(this).siblings('.add-species').val();
    $("#species1").append('<div class="box d-flex"> <span class="img-round"> <img src = "./images/bird.png" alt = "" class = "height-17" > </span> <span> <p> "English Name" </p> <p class = "fs-12 light-gray"> Scientific Name </p> </span> <i class="fas fa-times blue ml-3 close-chk close-btn"></i></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});

/*Add atttractions day 1*/
$("#addattractions").click(function() {
    $("#newattraction").append('<div class="col-lg-6 col-md-12 col-sm-12 box-dest"><i class="fas fa-times blue ml-3 close-chk close-btn" onclick="DeleteItineraryAttractions(118,1)"></i><div class="d-flex arrival-port" id="newdestination1"><div class="col-lg-6 col-md-6 col-sm-12"><img src="https://www.tripmemo.com/./uploads/no_image.png" class="desc-img" alt=""></div><div class="col-lg-6 col-md-6 col-sm-12 description"><div class="sec-1"><h1 class="fs-24 blue">One meter tea</h1> <p class="py-1">Cove</p></div><div class="read-more"><p class="pt-1">The DataHouse track record proves that the values and principles Dan set into place during the found</p></div>  </div></div></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});
$("#addattractions1").click(function() {
    $("#newattraction").append('<div class="col-lg-6 col-md-12 col-sm-12 box-dest"><i class="fas fa-times blue ml-3 close-chk close-btn" onclick="DeleteItineraryAttractions(118,1)"></i><div class="d-flex arrival-port" id="newdestination1"><div class="col-lg-6 col-md-6 col-sm-12"><img src="https://www.tripmemo.com/./uploads/no_image.png" class="desc-img" alt=""></div><div class="col-lg-6 col-md-6 col-sm-12 description"><div class="sec-1"><h1 class="fs-24 blue">One meter tea</h1> <p class="py-1">Cove</p></div><div class="read-more"><p class="pt-1">The DataHouse track record proves that the values and principles Dan set into place during the found</p></div>  </div></div></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});
$("#addattractions2").click(function() {
    $("#newattraction").append('<div class="col-lg-6 col-md-12 col-sm-12 box-dest"><i class="fas fa-times blue ml-3 close-chk close-btn" onclick="DeleteItineraryAttractions(118,1)"></i><div class="d-flex arrival-port" id="newdestination1"><div class="col-lg-6 col-md-6 col-sm-12"><img src="https://www.tripmemo.com/./uploads/no_image.png" class="desc-img" alt=""></div><div class="col-lg-6 col-md-6 col-sm-12 description"><div class="sec-1"><h1 class="fs-24 blue">One meter tea</h1> <p class="py-1">Cove</p></div><div class="read-more"><p class="pt-1">The DataHouse track record proves that the values and principles Dan set into place during the found</p></div>  </div></div></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});
$("#addattractions3").click(function() {
    $("#newattraction").append('<div class="col-lg-6 col-md-12 col-sm-12 box-dest"><i class="fas fa-times blue ml-3 close-chk close-btn" onclick="DeleteItineraryAttractions(118,1)"></i><div class="d-flex arrival-port" id="newdestination1"><div class="col-lg-6 col-md-6 col-sm-12"><img src="https://www.tripmemo.com/./uploads/no_image.png" class="desc-img" alt=""></div><div class="col-lg-6 col-md-6 col-sm-12 description"><div class="sec-1"><h1 class="fs-24 blue">One meter tea</h1> <p class="py-1">Cove</p></div><div class="read-more"><p class="pt-1">The DataHouse track record proves that the values and principles Dan set into place during the found</p></div>  </div></div></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});
/*Add atttractions day 2*/
$("#addattractions00").click(function() {
    $("#newattraction01").append('<div class="col-lg-6 col-md-12 col-sm-12 box-dest"><i class="fas fa-times blue ml-3 close-chk close-btn" onclick="DeleteItineraryAttractions(118,1)"></i><div class="d-flex arrival-port" id="newdestination1"><div class="col-lg-6 col-md-6 col-sm-12"><img src="https://www.tripmemo.com/./uploads/no_image.png" class="desc-img" alt=""></div><div class="col-lg-6 col-md-6 col-sm-12 description"><div class="sec-1"><h1 class="fs-24 blue">One meter tea</h1> <p class="py-1">Cove</p></div><div class="read-more"><p class="pt-1">The DataHouse track record proves that the values and principles Dan set into place during the found</p></div>  </div></div></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});
$("#addattractions01").click(function() {
    $("#newattraction01").append('<div class="col-lg-6 col-md-12 col-sm-12 box-dest"><i class="fas fa-times blue ml-3 close-chk close-btn" onclick="DeleteItineraryAttractions(118,1)"></i><div class="d-flex arrival-port" id="newdestination1"><div class="col-lg-6 col-md-6 col-sm-12"><img src="https://www.tripmemo.com/./uploads/no_image.png" class="desc-img" alt=""></div><div class="col-lg-6 col-md-6 col-sm-12 description"><div class="sec-1"><h1 class="fs-24 blue">One meter tea</h1> <p class="py-1">Cove</p></div><div class="read-more"><p class="pt-1">The DataHouse track record proves that the values and principles Dan set into place during the found</p></div>  </div></div></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});
$("#addattractions02").click(function() {
    $("#newattraction01").append('<div class="col-lg-6 col-md-12 col-sm-12 box-dest"><i class="fas fa-times blue ml-3 close-chk close-btn" onclick="DeleteItineraryAttractions(118,1)"></i><div class="d-flex arrival-port" id="newdestination1"><div class="col-lg-6 col-md-6 col-sm-12"><img src="https://www.tripmemo.com/./uploads/no_image.png" class="desc-img" alt=""></div><div class="col-lg-6 col-md-6 col-sm-12 description"><div class="sec-1"><h1 class="fs-24 blue">One meter tea</h1> <p class="py-1">Cove</p></div><div class="read-more"><p class="pt-1">The DataHouse track record proves that the values and principles Dan set into place during the found</p></div>  </div></div></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});
$("#addattractions03").click(function() {
    $("#newattraction01").append('<div class="col-lg-6 col-md-12 col-sm-12 box-dest"><i class="fas fa-times blue ml-3 close-chk close-btn" onclick="DeleteItineraryAttractions(118,1)"></i><div class="d-flex arrival-port" id="newdestination1"><div class="col-lg-6 col-md-6 col-sm-12"><img src="https://www.tripmemo.com/./uploads/no_image.png" class="desc-img" alt=""></div><div class="col-lg-6 col-md-6 col-sm-12 description"><div class="sec-1"><h1 class="fs-24 blue">One meter tea</h1> <p class="py-1">Cove</p></div><div class="read-more"><p class="pt-1">The DataHouse track record proves that the values and principles Dan set into place during the found</p></div>  </div></div></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});



/*Add destination day 1*/

$("#adddestination").click(function() {
    $("#newdestination").append('<div class="col-lg-6 col-md-12 col-sm-12 box-dest"><i class="fas fa-times blue ml-3 close-chk close-btn" onclick="DeleteArrivalPortDestinations(1,6674)"></i><div class=" arrival-port d-flex" id="newdestination1"><div class="col-lg-6 col-md-6 col-sm-12 pr-0"><img src="https://www.tripmemo.com/./uploads/destination/R553_6674.JPG" class="desc-img" alt=""></div><div class="col-lg-6 col-md-6 col-sm-12 description"><div class="sec-1"><h1 class="fs-24 blue mt-3">Arambol Beach</h1> <p class="py-1">Beach</p><span class="d-flex rating-card"><img src="https://stage.m.tripmemo.com/uploads/icons/gif1/in.png" class="img-sec mx-0 mr-1" alt="">Goa, India</span></div><div class="read-more"><p class="pt-1">Arambol Beach is located within the Pernem administrative region of North Goa. It borders Keri Beach</p></div>   <!-- <div class="read-more"><p class="pt-1">Congrats! Youre the first one to suggest this destination. Be the first one to contribute details about this place and win benefits.</p></div>  <p class=""><a href="#" class="" data-toggle="modal" data-target="#exampleModal1">Be a contributor now</a></p></div></div></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});
$("#adddestination1").click(function() {
    $("#newdestination").append('<div class="col-lg-6 col-md-12 col-sm-12 box-dest"><i class="fas fa-times blue ml-3 close-chk close-btn" onclick="DeleteArrivalPortDestinations(1,6674)"></i><div class=" arrival-port d-flex" id="newdestination1"><div class="col-lg-6 col-md-6 col-sm-12 pr-0"><img src="https://www.tripmemo.com/./uploads/destination/R553_6674.JPG" class="desc-img" alt=""></div><div class="col-lg-6 col-md-6 col-sm-12 description"><div class="sec-1"><h1 class="fs-24 blue mt-3">Arambol Beach</h1> <p class="py-1">Beach</p><span class="d-flex rating-card"><img src="https://stage.m.tripmemo.com/uploads/icons/gif1/in.png" class="img-sec mx-0 mr-1" alt="">Goa, India</span></div><div class="read-more"><p class="pt-1">Arambol Beach is located within the Pernem administrative region of North Goa. It borders Keri Beach</p></div>   <!-- <div class="read-more"><p class="pt-1">Congrats! Youre the first one to suggest this destination. Be the first one to contribute details about this place and win benefits.</p></div>  <p class=""><a href="#" class="" data-toggle="modal" data-target="#exampleModal1">Be a contributor now</a></p></div></div></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});
$("#adddestination2").click(function() {
    $("#newdestination").append('<div class="col-lg-6 col-md-12 col-sm-12 box-dest"><i class="fas fa-times blue ml-3 close-chk close-btn" onclick="DeleteArrivalPortDestinations(1,6674)"></i><div class=" arrival-port d-flex" id="newdestination1"><div class="col-lg-6 col-md-6 col-sm-12 pr-0"><img src="https://www.tripmemo.com/./uploads/destination/R553_6674.JPG" class="desc-img" alt=""></div><div class="col-lg-6 col-md-6 col-sm-12 description"><div class="sec-1"><h1 class="fs-24 blue mt-3">Arambol Beach</h1> <p class="py-1">Beach</p><span class="d-flex rating-card"><img src="https://stage.m.tripmemo.com/uploads/icons/gif1/in.png" class="img-sec mx-0 mr-1" alt="">Goa, India</span></div><div class="read-more"><p class="pt-1">Arambol Beach is located within the Pernem administrative region of North Goa. It borders Keri Beach</p></div>   <!-- <div class="read-more"><p class="pt-1">Congrats! Youre the first one to suggest this destination. Be the first one to contribute details about this place and win benefits.</p></div>  <p class=""><a href="#" class="" data-toggle="modal" data-target="#exampleModal1">Be a contributor now</a></p></div></div></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});
$("#adddestination3").click(function() {
    $("#newdestination").append('<div class="col-lg-6 col-md-12 col-sm-12 box-dest"><i class="fas fa-times blue ml-3 close-chk close-btn" onclick="DeleteArrivalPortDestinations(1,6674)"></i><div class=" arrival-port d-flex" id="newdestination1"><div class="col-lg-6 col-md-6 col-sm-12 pr-0"><img src="https://www.tripmemo.com/./uploads/destination/R553_6674.JPG" class="desc-img" alt=""></div><div class="col-lg-6 col-md-6 col-sm-12 description"><div class="sec-1"><h1 class="fs-24 blue mt-3">Arambol Beach</h1> <p class="py-1">Beach</p><span class="d-flex rating-card"><img src="https://stage.m.tripmemo.com/uploads/icons/gif1/in.png" class="img-sec mx-0 mr-1" alt="">Goa, India</span></div><div class="read-more"><p class="pt-1">Arambol Beach is located within the Pernem administrative region of North Goa. It borders Keri Beach</p></div>   <!-- <div class="read-more"><p class="pt-1">Congrats! Youre the first one to suggest this destination. Be the first one to contribute details about this place and win benefits.</p></div>  <p class=""><a href="#" class="" data-toggle="modal" data-target="#exampleModal1">Be a contributor now</a></p></div></div></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});
$("#adddestination4").click(function() {
    var valu = $('.add-check-field').val();
    $("#newdestination1").replaceWith('<div class="col-lg-6 col-md-12 col-sm-12 box-dest"><i class="fas fa-times blue ml-3 close-chk close-btn" onclick="DeleteArrivalPortDestinations(1,6674)"></i><div class=" arrival-port" id="newdestination1"><div class="col-lg-6 col-md-6 col-sm-12 pr-0"><img src="https://www.tripmemo.com/./uploads/destination/R553_6674.JPG" class="desc-img" alt=""></div><div class="col-lg-6 col-md-6 col-sm-12 description"><div class="sec-1"><h1 class="fs-24 blue mt-3">Arambol Beach</h1> <p class="py-1">Beach</p><span class="d-flex rating-card"><img src="https://stage.m.tripmemo.com/uploads/icons/gif1/in.png" class="img-sec mx-0 mr-1" alt="">Goa, India</span></div><div class="read-more"><p class="pt-1">Arambol Beach is located within the Pernem administrative region of North Goa. It borders Keri Beach</p></div>   <!-- <div class="read-more"><p class="pt-1">Congrats! Youre the first one to suggest this destination. Be the first one to contribute details about this place and win benefits.</p></div>  <p class=""><a href="#" class="" data-toggle="modal" data-target="#exampleModal1">Be a contributor now</a></p></div></div></div>');

});

/*Add destination day 2*/

$("#adddestination00").click(function() {
    $("#newdestination01").append('<div class="col-lg-6 col-md-12 col-sm-12 box-dest"><i class="fas fa-times blue ml-3 close-chk close-btn" onclick="DeleteArrivalPortDestinations(1,6674)"></i><div class=" arrival-port d-flex" id="newdestination1"><div class="col-lg-6 col-md-6 col-sm-12 pr-0"><img src="https://www.tripmemo.com/./uploads/destination/R553_6674.JPG" class="desc-img" alt=""></div><div class="col-lg-6 col-md-6 col-sm-12 description"><div class="sec-1"><h1 class="fs-24 blue mt-3">Arambol Beach</h1> <p class="py-1">Beach</p><span class="d-flex rating-card"><img src="https://stage.m.tripmemo.com/uploads/icons/gif1/in.png" class="img-sec mx-0 mr-1" alt="">Goa, India</span></div><div class="read-more"><p class="pt-1">Arambol Beach is located within the Pernem administrative region of North Goa. It borders Keri Beach</p></div>   <!-- <div class="read-more"><p class="pt-1">Congrats! Youre the first one to suggest this destination. Be the first one to contribute details about this place and win benefits.</p></div>  <p class=""><a href="#" class="" data-toggle="modal" data-target="#exampleModal1">Be a contributor now</a></p></div></div></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});
$("#adddestination01").click(function() {
    $("#newdestination01").append('<div class="col-lg-6 col-md-12 col-sm-12 box-dest"><i class="fas fa-times blue ml-3 close-chk close-btn" onclick="DeleteArrivalPortDestinations(1,6674)"></i><div class=" arrival-port d-flex" id="newdestination1"><div class="col-lg-6 col-md-6 col-sm-12 pr-0"><img src="https://www.tripmemo.com/./uploads/destination/R553_6674.JPG" class="desc-img" alt=""></div><div class="col-lg-6 col-md-6 col-sm-12 description"><div class="sec-1"><h1 class="fs-24 blue mt-3">Arambol Beach</h1> <p class="py-1">Beach</p><span class="d-flex rating-card"><img src="https://stage.m.tripmemo.com/uploads/icons/gif1/in.png" class="img-sec mx-0 mr-1" alt="">Goa, India</span></div><div class="read-more"><p class="pt-1">Arambol Beach is located within the Pernem administrative region of North Goa. It borders Keri Beach</p></div>   <!-- <div class="read-more"><p class="pt-1">Congrats! Youre the first one to suggest this destination. Be the first one to contribute details about this place and win benefits.</p></div>  <p class=""><a href="#" class="" data-toggle="modal" data-target="#exampleModal1">Be a contributor now</a></p></div></div></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});
$("#adddestination02").click(function() {
    $("#newdestination01").append('<div class="col-lg-6 col-md-12 col-sm-12 box-dest"><i class="fas fa-times blue ml-3 close-chk close-btn" onclick="DeleteArrivalPortDestinations(1,6674)"></i><div class=" arrival-port d-flex" id="newdestination1"><div class="col-lg-6 col-md-6 col-sm-12 pr-0"><img src="https://www.tripmemo.com/./uploads/destination/R553_6674.JPG" class="desc-img" alt=""></div><div class="col-lg-6 col-md-6 col-sm-12 description"><div class="sec-1"><h1 class="fs-24 blue mt-3">Arambol Beach</h1> <p class="py-1">Beach</p><span class="d-flex rating-card"><img src="https://stage.m.tripmemo.com/uploads/icons/gif1/in.png" class="img-sec mx-0 mr-1" alt="">Goa, India</span></div><div class="read-more"><p class="pt-1">Arambol Beach is located within the Pernem administrative region of North Goa. It borders Keri Beach</p></div>   <!-- <div class="read-more"><p class="pt-1">Congrats! Youre the first one to suggest this destination. Be the first one to contribute details about this place and win benefits.</p></div>  <p class=""><a href="#" class="" data-toggle="modal" data-target="#exampleModal1">Be a contributor now</a></p></div></div></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});
$("#adddestination03").click(function() {
    $("#newdestination01").append('<div class="col-lg-6 col-md-12 col-sm-12 box-dest"><i class="fas fa-times blue ml-3 close-chk close-btn" onclick="DeleteArrivalPortDestinations(1,6674)"></i><div class=" arrival-port d-flex" id="newdestination1"><div class="col-lg-6 col-md-6 col-sm-12 pr-0"><img src="https://www.tripmemo.com/./uploads/destination/R553_6674.JPG" class="desc-img" alt=""></div><div class="col-lg-6 col-md-6 col-sm-12 description"><div class="sec-1"><h1 class="fs-24 blue mt-3">Arambol Beach</h1> <p class="py-1">Beach</p><span class="d-flex rating-card"><img src="https://stage.m.tripmemo.com/uploads/icons/gif1/in.png" class="img-sec mx-0 mr-1" alt="">Goa, India</span></div><div class="read-more"><p class="pt-1">Arambol Beach is located within the Pernem administrative region of North Goa. It borders Keri Beach</p></div>   <!-- <div class="read-more"><p class="pt-1">Congrats! Youre the first one to suggest this destination. Be the first one to contribute details about this place and win benefits.</p></div>  <p class=""><a href="#" class="" data-toggle="modal" data-target="#exampleModal1">Be a contributor now</a></p></div></div></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});


/*Add accommodation day 1*/
$("#addaccommodation").click(function() {
    $("#newaccommodation").append('<div class="col-lg-6 col-md-12 col-sm-12 box-acc mt-4"><i class="fas fa-times box-icon blue ml-3 close-chk close-btn"></i><div class="d-flex arrival-port"><div class="col-lg-6 col-md-6 col-sm-6 pr-0 pl-0  arrival-port-1"><img src="./images/surfing.png" class="desc-img h-100" alt=""></div><div class="col-lg-6 col-md-6 col-sm-6 description"><div class="sec-1"><h1 class="fs-14 blue">The Village Melbourne</h1></div><div class="sec-3"><p class=" pt-2 fs-14 pt-2"><i class="fas fa-map-marker-alt mr-2 red"></i>Wellshore Resort Group, Orchid Valley, SH 16, Munnnar, Kerala</p><p class="fs-14 pt-2"><i class="fas fa-phone blue mr-2"></i>+91 9874563210</p><p class="fs-14 pt-2"><i class="fas fa-envelope blue mr-2"></i>abc@gmail.com</p><p class="fs-14 pt-2"><i class="fas fa-globe blue mr-2"></i>www.gardens.com</p></div></div></div></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});
$("#addaccommodation1").click(function() {
    $("#newaccommodation").append('<div class="col-lg-6 col-md-12 col-sm-12 box-acc mt-4"><i class="fas fa-times box-icon blue ml-3 close-chk close-btn"></i><div class="d-flex arrival-port"><div class="col-lg-6 col-md-6 col-sm-6 pr-0 pl-0  arrival-port-1"><img src="./images/surfing.png" class="desc-img h-100" alt=""></div><div class="col-lg-6 col-md-6 col-sm-6 description"><div class="sec-1"><h1 class="fs-14 blue">The Village Melbourne</h1></div><div class="sec-3"><p class=" pt-2 fs-14 pt-2"><i class="fas fa-map-marker-alt mr-2 red"></i>Wellshore Resort Group, Orchid Valley, SH 16, Munnnar, Kerala</p><p class="fs-14 pt-2"><i class="fas fa-phone blue mr-2"></i>+91 9874563210</p><p class="fs-14 pt-2"><i class="fas fa-envelope blue mr-2"></i>abc@gmail.com</p><p class="fs-14 pt-2"><i class="fas fa-globe blue mr-2"></i>www.gardens.com</p></div></div></div></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});
$("#addaccommodation2").click(function() {
    $("#newaccommodation").append('<div class="col-lg-6 col-md-12 col-sm-12 box-acc mt-4"><i class="fas fa-times box-icon blue ml-3 close-chk close-btn"></i><div class="d-flex arrival-port"><div class="col-lg-6 col-md-6 col-sm-6 pr-0 pl-0  arrival-port-1"><img src="./images/surfing.png" class="desc-img h-100" alt=""></div><div class="col-lg-6 col-md-6 col-sm-6 description"><div class="sec-1"><h1 class="fs-14 blue">The Village Melbourne</h1></div><div class="sec-3"><p class=" pt-2 fs-14 pt-2"><i class="fas fa-map-marker-alt mr-2 red"></i>Wellshore Resort Group, Orchid Valley, SH 16, Munnnar, Kerala</p><p class="fs-14 pt-2"><i class="fas fa-phone blue mr-2"></i>+91 9874563210</p><p class="fs-14 pt-2"><i class="fas fa-envelope blue mr-2"></i>abc@gmail.com</p><p class="fs-14 pt-2"><i class="fas fa-globe blue mr-2"></i>www.gardens.com</p></div></div></div></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});
$("#addaccommodation3").click(function() {
    $("#newaccommodation").append('<div class="col-lg-6 col-md-12 col-sm-12 box-acc mt-4"><i class="fas fa-times box-icon blue ml-3 close-chk close-btn"></i><div class="d-flex arrival-port"><div class="col-lg-6 col-md-6 col-sm-6 pr-0 pl-0  arrival-port-1"><img src="./images/surfing.png" class="desc-img h-100" alt=""></div><div class="col-lg-6 col-md-6 col-sm-6 description"><div class="sec-1"><h1 class="fs-14 blue">The Village Melbourne</h1></div><div class="sec-3"><p class=" pt-2 fs-14 pt-2"><i class="fas fa-map-marker-alt mr-2 red"></i>Wellshore Resort Group, Orchid Valley, SH 16, Munnnar, Kerala</p><p class="fs-14 pt-2"><i class="fas fa-phone blue mr-2"></i>+91 9874563210</p><p class="fs-14 pt-2"><i class="fas fa-envelope blue mr-2"></i>abc@gmail.com</p><p class="fs-14 pt-2"><i class="fas fa-globe blue mr-2"></i>www.gardens.com</p></div></div></div></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});

/*Add accommodation day 2*/

$("#addaccommodation00").click(function() {
    $("#newaccommodation01").append('<div class="col-lg-6 col-md-12 col-sm-12 box-acc mt-4"><i class="fas fa-times box-icon blue ml-3 close-chk close-btn"></i><div class="d-flex arrival-port"><div class="col-lg-6 col-md-6 col-sm-6 pr-0 pl-0  arrival-port-1"><img src="./images/surfing.png" class="desc-img h-100" alt=""></div><div class="col-lg-6 col-md-6 col-sm-6 description"><div class="sec-1"><h1 class="fs-14 blue">The Village Melbourne</h1></div><div class="sec-3"><p class=" pt-2 fs-14 pt-2"><i class="fas fa-map-marker-alt mr-2 red"></i>Wellshore Resort Group, Orchid Valley, SH 16, Munnnar, Kerala</p><p class="fs-14 pt-2"><i class="fas fa-phone blue mr-2"></i>+91 9874563210</p><p class="fs-14 pt-2"><i class="fas fa-envelope blue mr-2"></i>abc@gmail.com</p><p class="fs-14 pt-2"><i class="fas fa-globe blue mr-2"></i>www.gardens.com</p></div></div></div></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});
$("#addaccommodation01").click(function() {
    $("#newaccommodation01").append('<div class="col-lg-6 col-md-12 col-sm-12 box-acc mt-4"><i class="fas fa-times box-icon blue ml-3 close-chk close-btn"></i><div class="d-flex arrival-port"><div class="col-lg-6 col-md-6 col-sm-6 pr-0 pl-0  arrival-port-1"><img src="./images/surfing.png" class="desc-img h-100" alt=""></div><div class="col-lg-6 col-md-6 col-sm-6 description"><div class="sec-1"><h1 class="fs-14 blue">The Village Melbourne</h1></div><div class="sec-3"><p class=" pt-2 fs-14 pt-2"><i class="fas fa-map-marker-alt mr-2 red"></i>Wellshore Resort Group, Orchid Valley, SH 16, Munnnar, Kerala</p><p class="fs-14 pt-2"><i class="fas fa-phone blue mr-2"></i>+91 9874563210</p><p class="fs-14 pt-2"><i class="fas fa-envelope blue mr-2"></i>abc@gmail.com</p><p class="fs-14 pt-2"><i class="fas fa-globe blue mr-2"></i>www.gardens.com</p></div></div></div></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});
$("#addaccommodation02").click(function() {
    $("#newaccommodation01").append('<div class="col-lg-6 col-md-12 col-sm-12 box-acc mt-4"><i class="fas fa-times box-icon blue ml-3 close-chk close-btn"></i><div class="d-flex arrival-port"><div class="col-lg-6 col-md-6 col-sm-6 pr-0 pl-0  arrival-port-1"><img src="./images/surfing.png" class="desc-img h-100" alt=""></div><div class="col-lg-6 col-md-6 col-sm-6 description"><div class="sec-1"><h1 class="fs-14 blue">The Village Melbourne</h1></div><div class="sec-3"><p class=" pt-2 fs-14 pt-2"><i class="fas fa-map-marker-alt mr-2 red"></i>Wellshore Resort Group, Orchid Valley, SH 16, Munnnar, Kerala</p><p class="fs-14 pt-2"><i class="fas fa-phone blue mr-2"></i>+91 9874563210</p><p class="fs-14 pt-2"><i class="fas fa-envelope blue mr-2"></i>abc@gmail.com</p><p class="fs-14 pt-2"><i class="fas fa-globe blue mr-2"></i>www.gardens.com</p></div></div></div></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});
$("#addaccommodation03").click(function() {
    $("#newaccommodation01").append('<div class="col-lg-6 col-md-12 col-sm-12 box-acc mt-4"><i class="fas fa-times box-icon blue ml-3 close-chk close-btn"></i><div class="d-flex arrival-port"><div class="col-lg-6 col-md-6 col-sm-6 pr-0 pl-0  arrival-port-1"><img src="./images/surfing.png" class="desc-img h-100" alt=""></div><div class="col-lg-6 col-md-6 col-sm-6 description"><div class="sec-1"><h1 class="fs-14 blue">The Village Melbourne</h1></div><div class="sec-3"><p class=" pt-2 fs-14 pt-2"><i class="fas fa-map-marker-alt mr-2 red"></i>Wellshore Resort Group, Orchid Valley, SH 16, Munnnar, Kerala</p><p class="fs-14 pt-2"><i class="fas fa-phone blue mr-2"></i>+91 9874563210</p><p class="fs-14 pt-2"><i class="fas fa-envelope blue mr-2"></i>abc@gmail.com</p><p class="fs-14 pt-2"><i class="fas fa-globe blue mr-2"></i>www.gardens.com</p></div></div></div></div>');
    $(".close-chk").click(function() {
        $(this).parent().remove();
    })
});

/*character count*/

input
$('#input').keyup(function() {
    var characterCount = $(this).val().length,
        current = $('#current'),
        maximum = $('#maximum'),
        theCount = $('#the-count');
    current.text(characterCount);
});
$('#input1').keyup(function() {
    var characterCount = $(this).val().length,
        current1 = $('#current1'),
        maximum1 = $('#maximum1'),
        theCount1 = $('#the-count1');
    current1.text(characterCount);
});
$('#input2').keyup(function() {
    var characterCount = $(this).val().length,
        current2 = $('#current2'),
        maximum2 = $('#maximum2'),
        theCount2 = $('#the-count2');
    current2.text(characterCount);
});
$('#input3').keyup(function() {
    var characterCount = $(this).val().length,
        current3 = $('#current3'),
        maximum3 = $('#maximum3'),
        theCount3 = $('#the-count3');
    current3.text(characterCount);
});
$('#input4').keyup(function() {
    var characterCount = $(this).val().length,
        current4 = $('#current4'),
        maximum4 = $('#maximum4'),
        theCount4 = $('#the-count4');
    current4.text(characterCount);
});
$('#input5').keyup(function() {
    var characterCount = $(this).val().length,
        current5 = $('#current5'),
        maximum5 = $('#maximum5'),
        theCount5 = $('#the-count5');
    current5.text(characterCount);
});



/*FDD Selection*/

function yesnoCheck(that) {
    if (that.value == "other") {
        document.getElementById("ifYes").style.display = "block";
    } else {
        document.getElementById("ifYes").style.display = "none";
    }
}


/*date range picker*/

$('#reportrange').daterangepicker({
    opens: 'right',
    drops: 'up',
    locale: {
        format: 'DD/MMM/YYYY'
    }
}, function cb(start, end) {
    $('#reportrange span').html(start.format('DD MMM YYYY') + ' - ' + end.format('DD MMM YYYY'));
});


/*=======================accommodation selection===================*/