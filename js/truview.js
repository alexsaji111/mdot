/*==============start rating===========*/

$(".rateYo").each(function(e) {

    var ChngRatevaluesEn = { 1: 'bad', 2: 'poor', 3: 'ok', 4: 'good', 5: 'super' };
    var ChngRatevaluesAr = { 1: 'bad-Ar', 2: 'poor-Ar', 3: 'ok-Ar', 4: 'good-Ar', 5: 'super-Ar' };
    var language = "english";
    var rating = $(this).attr("data-rating");
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
        normalFill: "#A0A0A0",
        spacing: "10px",
        precision: 2,

    });
});



function ratingFunc(rating, bookid, lang) {;
    if (lang != null) {
        language = lang;
    };
}


/*============character count==========*/

$('textarea').keyup(function() {

    var characterCount = $(this).val().length,
        current = $('#current'),
        maximum = $('#maximum'),
        theCount = $('#the-count');

    current.text(characterCount);

    if (characterCount < 70) {
        current.css('color', '#666');
    }
    if (characterCount > 70 && characterCount < 90) {
        current.css('color', '#6d5555');
    }
    if (characterCount > 90 && characterCount < 100) {
        current.css('color', '#793535');
    }
    if (characterCount > 100 && characterCount < 120) {
        current.css('color', '#841c1c');
    }
    if (characterCount > 120 && characterCount < 139) {
        current.css('color', '#8f0001');
    }

    if (characterCount >= 140) {
        maximum.css('color', '#8f0001');
        current.css('color', '#8f0001');
        theCount.css('font-weight', 'normal');
    } else {
        maximum.css('color', '#666');
        theCount.css('font-weight', 'normal');
    }


});



$(".image-box").click(function(event) {
    var previewImg = $(this).children("img");

    $(this)
        .siblings()
        .children("input")
        .trigger("click");

    $(this)
        .siblings()
        .children("input")
        .change(function() {
            var reader = new FileReader();

            reader.onload = function(e) {
                var urll = e.target.result;
                $(previewImg).attr("src", urll);
                previewImg.parent().css("background", "transparent");
                previewImg.show();
                previewImg.siblings("p").hide();
                
            };
            
            reader.readAsDataURL(this.files[0]);
            
        });
        
      
});

if (window.File && window.FileList && window.FileReader) {
  $("#files").on("change", function(e) {
    var files = e.target.files,
      filesLength = files.length;
    for (var i = 0; i < filesLength; i++) {
      var f = files[i]
      var fileReader = new FileReader();
      fileReader.onload = (function(e) {
        var file = e.target;
        $("<span class=\"pip\">" +
          "<img class=\"imageThumb\" src=\"" + e.target.result + "\" title=\"" + file.name + "\"/>" +
          "<br/><span class=\"remove\">Remove image</span>" +
          "</span>").insertAfter("#files");
        $(".remove").click(function(){
          $(this).parent(".pip").remove();
        });
      
      });
      fileReader.readAsDataURL(f);
    }
  });
} else {
  alert("Your browser doesn't support to File API")
}
