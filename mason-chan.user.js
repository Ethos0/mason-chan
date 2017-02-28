// ==UserScript==
// @name         Mason-Chan
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adds some nice masonry to 8ch
// @author       Ethos
// @include      /^https?://([^\.]+\.)?8ch\.net(/mod\.php\?)?/abdlstory(/.*)?$/
// @require		 http://code.jquery.com/jquery-3.1.1.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/masonry/4.1.1/masonry.pkgd.min.js
// @grant        none
// ==/UserScript==

var __test = {};

(function() {
    'use strict';
	
	$(`<style type='text/css'>
.post.reply{ 
	width: 500px !important;
	min-width: 500px !important;
	max-width: 500px !important;
	border-radius: 10px;
}
</style>`).appendTo("head");
	
	$('.thread').masonry({
		itemSelector: '.post.reply:not(.post-hover)',
		stamp: '.post.op, .thread > div:nth-child(1) img.post-image'
	});
	
	setInterval(function(){ 
		$('.thread').masonry('reloadItems').masonry();
	}, 500);
})();