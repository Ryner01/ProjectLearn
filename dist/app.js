$(document).ready(function(){var e=!1,t=!1;$("#date-picker-1").mousedown(function(t){var i=$(this).offset(),r=i.left;docW=$("body").width(),relX=t.pageX-r,e=!0}),$("#date-picker-2").mousedown(function(e){var i=$(this).offset(),r=i.left;docW=$("body").width(),relX=e.pageX-r,t=!0}),$(document).mousemove(function(i){if(sliderWidth=$(".date-pick-slider").width(),sliderOffset=$(".date-pick-slider").offset(),slidePicker1=parseInt($("#date-picker-1").css("left"),10)+$("#date-picker-1").width(),slidePicker2=parseInt($("#date-picker-2").css("left"),10)-$("#date-picker-2").width(),1==e||1==t){var r=$("#date-picker-2").offset().left-$("#date-picker-1").offset().left;$(".date-pick-slider-active").css("width",r+"px"),sl1cntr=parseInt($("#date-picker-1").css("left"),10)+$("#date-picker-1").width()/2,$(".date-pick-slider-active").css("margin-left",sl1cntr+"px"),sliderDaysPixels=sliderWidth/365;var s=r/sliderDaysPixels;$("#current-date-number").html(Math.round(s));var a=Math.round(sl1cntr/sliderDaysPixels),d=a+Math.round(s),c=new Date((new Date).getFullYear(),0,a),l=new Date((new Date).getFullYear(),0,d)}if(e){var f=($("#date-picker-1").css("left"),i.pageX),p=f-relX-sliderOffset.left;$("#date-picker-1").css("left",p+"px"),-46>=p&&$("#date-picker-1").css("left","-45px"),p>=slidePicker2&&$("#date-picker-1").css("left",slidePicker2+"px");var n=c,o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],k=o[n.getMonth()]+", "+n.getDate();$("#date-inner-text-1").html(k)}else if(t){var f=($("#date-picker-2").css("left"),i.pageX),p=f-relX-sliderOffset.left;$("#date-picker-2").css("left",p+"px"),p<=slidePicker1&&$("#date-picker-2").css("left",slidePicker1+"px"),p>=483&&$("#date-picker-2").css("left","483px");var n=l,o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],k=o[n.getMonth()]+", "+n.getDate();$("#date-inner-text-2").html(k)}}),$(document).mouseup(function(i){e=!1,t=!1})});