$(document).ready(function(){
  
    $(".click-image").on("click",function(){
        
        var imagesrc=$(this).attr('src');
        $("#demo-image").attr('src',imagesrc);

    });
});