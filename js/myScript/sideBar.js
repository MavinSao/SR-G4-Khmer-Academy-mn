$(document).ready(function(){
    $('.cl-hs').on('click',function(){
        $('.li-hs').slideToggle();
        $(this).find($(".fa")).toggleClass('fa-angle-left').toggleClass('fa-angle-down');
    })
    $('.cl-ss').on('click',function(){
        $('.li-ss').slideToggle();
        $(this).find($(".fa")).toggleClass('fa-angle-left').toggleClass('fa-angle-down');
    })
    $('.cl-cs').on('click',function(){
        $('.li-cs').slideToggle();
        $(this).find($(".fa")).toggleClass('fa-angle-left').toggleClass('fa-angle-down');
    })
    $('.cl-fc').on('click',function(){
        $('.li-fc').slideToggle();
        $(this).find($(".fa")).toggleClass('fa-angle-left').toggleClass('fa-angle-down');
    })
    $('.cl-lg').on('click',function(){
        $('.li-lg').slideToggle();
        $(this).find($(".fa")).toggleClass('fa-angle-left').toggleClass('fa-angle-down');
    })
    $('.cl-he').on('click',function(){
        $('.li-he').slideToggle();
        $(this).find($(".fa")).toggleClass('fa-angle-left').toggleClass('fa-angle-down');
    })


    // —------------------------( high school )---------------------------—
    $('#li-hs-math').hover(function(){ $('#li-hs-math').css( 'cursor', 'pointer' ); })
    $('#li-hs-phy').hover(function(){ $('#li-hs-phy').css( 'cursor', 'pointer' ); })
    $('#li-hs-che').hover(function(){ $('#li-hs-che').css( 'cursor', 'pointer' ); })
    $('#li-hs-bio').hover(function(){ $('#li-hs-bio').css( 'cursor', 'pointer' ); })

    // —------------------------( secondary school )---------------------------—
    $('#li-ss-math').hover(function(){ $('#li-ss-math').css( 'cursor', 'pointer' ); })
    $('#li-ss-phy').hover(function(){ $('#li-ss-phy').css( 'cursor', 'pointer' ); })
    $('#li-ss-che').hover(function(){ $('#li-ss-che').css( 'cursor', 'pointer' ); })
   
})