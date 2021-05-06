/*Some e volta*/
// Debounce do Lodash
// debounce = function(func, wait, immediate) {
// 	var timeout;
// 	return function() {
// 		var context = this, args = arguments;
// 		var later = function() {
// 			timeout = null;
// 			if (!immediate) func.apply(context, args);
// 		};
// 		var callNow = immediate && !timeout;
// 		clearTimeout(timeout);
// 		timeout = setTimeout(later, wait);
// 		if (callNow) func.apply(context, args);
// 	};
// };


// (function(){
// 	var $target = $('.anime'),
// 			animationClass = 'anime-start',
// 			offset = $(window).height() * 3/4;

// 	function animeScroll() {
// 		var documentTop = $(document).scrollTop();

// 		$target.each(function(){
// 			var itemTop = $(this).offset().top;
// 			if (documentTop > itemTop - offset) {
// 				$(this).addClass(animationClass);
// 			} else {
// 				$(this).removeClass(animationClass);
// 			}
// 		});
// 	}

// 	animeScroll();

// 	$(document).scroll(debounce(function(){
// 		animeScroll();
// 	}, 200));
// })();

/*painel de trabalhos*/
debounce = function (func, wait, immediate) {
	var timeout;
	return function () {
		var context = this, args = arguments;
		var later = function () {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

(function () {
	var $target = $('.anime'),
	animationClass = 'anime-start',
		offset = $(window).height() * 3 / 4;

	function animeScroll() {
		var documentTop = $(document).scrollTop();

		$target.each(function () {
			var itemTop = $(this).offset().top;
			if (documentTop > itemTop - offset) {
				$(this).addClass(animationClass);
				
			} else {
				/*$(this).removeClass(animationClass);*/
			}
		});
	}

	animeScroll();

	$(document).scroll(debounce(function () {
		animeScroll();
	}, 200));
})();





/*revelar texto*/


(function () {
	var $target = $('.block-r'),
	animationClass = 'text-block',
		offset = $(window).height() * 3 / 4;

	function animeScroll() {
		var documentTop = $(document).scrollTop();

		$target.each(function () {
			var itemTop = $(this).offset().top;
			if (documentTop > itemTop - offset) {
				$(this).addClass(animationClass);
				
			} else {
				/*$(this).removeClass(animationClass);*/
			}
		});
	}

	animeScroll();

	$(document).scroll(debounce(function () {
		animeScroll();
	}, 200));
})();







(function () {
	var $target = $('.titulo-footer-cima'),
	animationClass = 'text',
		offset = $(window).height() * 3 / 3;

	function animeScroll() {
		var documentTop = $(document).scrollTop();

		$target.each(function () {
			var itemTop = $(this).offset().top;
			if (documentTop > itemTop - offset) {
				$(this).addClass(animationClass);
				
			} else {
				/*$(this).removeClass(animationClass);*/
			}
		});
	}

	animeScroll();

	$(document).scroll(debounce(function () {
		animeScroll();
	}, 200));
})();























(function () {
	var $target = $('.sub-title-footer'),
	animationClass = 'text-block-sub',
		offset = $(window).height() * 3 / 3;

	function animeScroll() {
		var documentTop = $(document).scrollTop();

		$target.each(function () {
			var itemTop = $(this).offset().top;
			if (documentTop > itemTop - offset) {
				$(this).addClass(animationClass);
				
			} else {
				/*$(this).removeClass(animationClass);*/
			}
		});
	}

	animeScroll();

	$(document).scroll(debounce(function () {
		animeScroll();
	}, 200));
})();




(function () {
	var $target = $('.comentario'),
	animationClass = 'text-sub',
		offset = $(window).height() * 3 / 4;

	function animeScroll() {
		var documentTop = $(document).scrollTop();

		$target.each(function () {
			var itemTop = $(this).offset().top;
			if (documentTop > itemTop - offset) {
				$(this).addClass(animationClass);
				
			} else {
				/*$(this).removeClass(animationClass);*/
			}
		});
	}

	animeScroll();

	$(document).scroll(debounce(function () {
		animeScroll();
	}, 200));
})();


































// Debounce do Lodash
debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


(function(){
	var $target = $('.anime-painel-cima'),
			animationClass = 'anime-start-painel-cima',
			offset = $(window).height() * 3/5;

	function animeScroll() {
		var documentTop = $(document).scrollTop();

		$target.each(function(){
			var itemTop = $(this).offset().top;
			if (documentTop > itemTop - offset) {
				$(this).addClass(animationClass);
			
			} else {
				/* $(this).removeClass(animationClass);*/
			}
		});
	}

	animeScroll();

	$(document).scroll(debounce(function(){
		animeScroll();
	}, 200));
})();


(function () {
	var $target = $('.icone-opac'),
		animationClass = 'animacao-icons-exp',
		offset = $(window).height() * 3 / 3.5;

	function animeScroll() {
		var documentTop = $(document).scrollTop();

		$target.each(function () {
			var itemTop = $(this).offset().top;
			if (documentTop > itemTop - offset) {
				$(this).addClass(animationClass);
				/*$(this).animate({ 'opacity': '1' }, 1000);*/
			} else {
				/*$(this).removeClass(animationClass);*/
			}
		});
	}

	animeScroll();

	$(document).scroll(debounce(function () {
		animeScroll();
	}, 200));
})();



(function () {
	var $target = $('.anime-icones-sobe'),
		animationClass = 'animacao-icons-sobe',
		offset = $(window).height() * 3 / 3;

	function animeScroll() {
		var documentTop = $(document).scrollTop();

		$target.each(function () {
			var itemTop = $(this).offset().top;
			if (documentTop > itemTop - offset) {
				$(this).addClass(animationClass);
				/*$(this).animate({ 'opacity': '1' }, 1000);*/
			} else {
				/*$(this).removeClass(animationClass);*/
			}
		});
	}

	animeScroll();

	$(document).scroll(debounce(function () {
		animeScroll();
	}, 100));
})();




// // Debounce do Lodash
// debounce = function(func, wait, immediate) {
// 	var timeout;
// 	return function() {
// 		var context = this, args = arguments;
// 		var later = function() {
// 			timeout = null;
// 			if (!immediate) func.apply(context, args);
// 		};
// 		var callNow = immediate && !timeout;
// 		clearTimeout(timeout);
// 		timeout = setTimeout(later, wait);
// 		if (callNow) func.apply(context, args);
// 	};
// };


// (function(){
// 	var $target = $('.anime-icones'),
// 			animationClass = 'anime-start-icones',
// 			offset = $(window).height() * 3/5;

// 	function animeScroll() {
// 		var documentTop = $(document).scrollTop();

// 		$target.each(function(){
// 			var itemTop = $(this).offset().top;
// 			if (documentTop > itemTop - offset) {
// 				$(this).addClass(animationClass);
			
// 			} else {
// 				/* $(this).removeClass(animationClass);*/
// 			}
// 		});
// 	}

// 	animeScroll();

// 	$(document).scroll(debounce(function(){
// 		animeScroll();
// 	}, 200));
// })();

/*pata titulos*/

// Debounce do Lodash
debounce = function (func, wait, immediate) {
	var timeout;
	return function () {
		var context = this, args = arguments;
		var later = function () {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

(function () {
	var $target = $('.anime-escreva'),
	animationClass = 'typewriter',
		offset = $(window).height() * 3 / 4;

	function animeScroll() {
		var documentTop = $(document).scrollTop();

		$target.each(function () {
			var itemTop = $(this).offset().top;
			if (documentTop > itemTop - offset) {
				$(this).addClass(animationClass);
				
			} else {
				$(this).removeClass(animationClass);
			}
		});
	}

	animeScroll();

	$(document).scroll(debounce(function () {
		animeScroll();
	}, 200));
})();


jQuery(window).load(function () {
    $(".loader").delay(1500).fadeOut("slow"); 
  $("#tudo_page").toggle("fast");
  });




  setTimeout(function(){
    document.querySelector('body').classList.remove('esconder');
}, 1.8 * 1000);























