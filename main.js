  
$( document ).ready(function() {
    
    $('a[href^="#"]').on('click', function (e){
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').animate({
           'scrollTop': $target.offset().top 
        }, 1000, 'swing', function(){
           window.location.hash = target;
        });

    });



    var header = document.querySelector("#introContainer");

window.onscroll = function() {

    $("#introContainer").css("opacity", 1 - $(window).scrollTop() / 500);
    $("#smallIntro").css("opacity", 1 - $(window).scrollTop() / 500);
};

});