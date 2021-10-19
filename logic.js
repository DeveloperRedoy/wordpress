$(document).ready(function(){

    $('.btn1').click(function(){
        $('.div1').fadeTo(300,0.2)
    });

    $('.btn2').click(function(){
        $('.div2').fadeTo(300,0.2)
    });

    $('.btn3').click(function(){
        $('.div3').fadeTo(300,0.2)
    });

    $('img').click(function(){
        $('.div1').fadeTo(200,1);
        $('.div2').fadeTo(200,1);
        $('.div3').fadeTo(200,1);
    });
});