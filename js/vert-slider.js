  $(function() {
    //Tooltip Hover feature
    $(".interest-tooltip").hover(function(){
      $(".interest-tooltip-box").fadeIn("show-tooltip");
    });
    $('body').click(function(){
      $(".interest-tooltip-box").fadeOut("show-tooltip");
    });
    
  });
