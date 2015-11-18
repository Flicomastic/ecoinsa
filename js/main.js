$("a.smooth").on("click",function(t){t.preventDefault();var o=$(this),a=o.attr("href");$("html, body").stop().animate({scrollTop:$(a).offset().top},1e3)});
