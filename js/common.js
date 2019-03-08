$(function(){
"use strict";

// drawer
  $('.drawer').drawer();

// nav toggle
	$(".dropdown ul").hide();
	$(".dropdown p").on("click", function () {
		$(this).next().slideToggle(300);
		$(this).toggleClass("active");
	});
	
// devices
  var _ua = (function(u){ return {

    Tablet:(u.indexOf("windows") !== -1 && u.indexOf("touch") !== -1 && u.indexOf("tablet pc") === -1) || u.indexOf("ipad") !== -1 || (u.indexOf("android") !== -1 && u.indexOf("mobile") === -1) || (u.indexOf("firefox") !== -1 && u.indexOf("tablet") !== -1) || u.indexOf("kindle") !== -1 || u.indexOf("silk") !== -1 || u.indexOf("playbook") !== -1, 

    Mobile:(u.indexOf("windows") !== -1 && u.indexOf("phone") !== -1) || u.indexOf("iphone") !== -1 || u.indexOf("ipod") !== -1 || (u.indexOf("android") !== -1 && u.indexOf("mobile") !== -1) || (u.indexOf("firefox") !== -1 && u.indexOf("mobile") !== -1) || u.indexOf("blackberry") !== -1};
  })(window.navigator.userAgent.toLowerCase());
  
  if(_ua.Mobile){
		$('.tel').each(function() {
			var txt = $(this).text();
			$(this).html($('<a>').attr('href', 'tel:' + txt.replace(/-/g, '')).append(txt + '</a>'));
		});	
  }
  else if(_ua.Tablet){
  }
  else{
  }


});