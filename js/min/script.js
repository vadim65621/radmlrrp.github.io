$(document).ready(function(){var i=$(".sidebar__active-line"),e=$(".sidebar__nav"),t=$(".sidebar__link_active"),n=t.parent().position().top;i.animate({top:n,height:t.parent().height()}),e.on("mouseenter",".sidebar__link",function(){i.stop(),i.animate({top:$(this).parent().position().top,height:$(this).parent().height()},200)}),e.on("mouseleave",".sidebar__link",function(){i.stop(),i.animate({top:n,height:t.parent().height()},200)});var a=$(".sidebar"),o=$(".overlay");$(".open-bar").click(function(){o.show(),a.show()}),o.click(function(){a.hide(),o.hide()})});