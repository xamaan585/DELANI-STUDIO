$(document).ready(function(){
    $("div.image-frame").hover(function(){
        $(".classAdd1").addClass("mask flex-center rgba-red-strong");
    })
    $("div.image-frame").hover(function(){
        $(".classAdd2").addClass("mask flex-center rgba-blue-light");
    })
    $("div.image-frame").hover(function(){
        $(".classAdd3").addClass("mask flex-center rgba-green-slight");
    })
    $("div.image-frame").hover(function(){
        $(".classAdd4").addClass("mask flex-center");
    })
})