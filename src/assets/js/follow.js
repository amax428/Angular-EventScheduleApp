function betterParseFloat(x) {
    if (x && isNaN(parseFloat(x)) && x.length > 0)
     return betterParseFloat(x.substr(1));
    return parseFloat(x);
   }
   
   function usd(x) {
    x = betterParseFloat(x);
    if (isNaN(x))
     return "0.00";
    var hours = Math.floor(x);
    var minutes = Math.round((x - hours) * 60) + "";
    if (minutes.length == 1) minutes = "0" + minutes;
    $('#dateTimeText').val(this.value);
    $('#dateTimeText').click();
    return hours + ":" + minutes;
   }
   
   function DateChange(me) {
    $('#dateText').val(me.value);
    $('#dateText').click();
   }
   $(document).ready(function() {
   
    $(".toggleMenuBtn").click(function() {
      if($(this).children(".open-img").hasClass('show')){
         $(".open-img").removeClass("show");
         $(".hide-img").removeClass("hide");
         $(this).children(".open-img").addClass("hide");
         $(this).children(".hide-img").addClass("show");
       }else{
         $(".open-img").removeClass("hide");
         $(".hide-img").removeClass("show");
         $(this).children(".open-img").addClass("show");
         $(this).children(".hide-img").addClass("hide");
       }
       
     // $(".open-img").toggleClass("show");
     // $(".hide-img").toggleClass("hide");
    });

    $(".social_icon").click(function() {
      //console.log('aa');
      $(".open-image").removeClass("hide");
      $(".hide-image").removeClass("show");
      $(this).children(".open-image").addClass("hide");
      $(this).children(".hide-image").addClass("show");
    });
   
   
    // Active Class
    $('.social_icon').click(function() {
     $('.social_icon').removeClass("active");
     $(this).addClass("active");
    });
   
    // $("#datepicker").datepicker({
    //    dateFormat: 'yy-mm-dd' 
    // }
    // );
    $("#datepicker").datepicker({
      //clearBtn:!0,
      format: 'yyyy-mm-dd',
      autoclose: true,
      todayHighlight:!0,
          templates:{leftArrow:'<i class="icon-arrow-left2"></i>',rightArrow:'<i class="icon-arrow-right2"></i>'}
    });

    
   });
