/* 
	@codekit-prepend "TweenMax.min.js"
	@codekit-prepend "kreative-gallery.js"
*/

(function(){
	var tlm = new TimelineMax({onComplete: playGallery});
	var gallery = new KreativeGallery();
	
	tlm.insert( TweenMax.to($("h1"), 1.2, {
		css: {
			color: "white"
		}
	}), .6);
	
	tlm.insert( TweenMax.to($("h1"), .3, {
		css: {
			opacity: 1
		}
	}), 0);
	
	tlm.insert( TweenMax.from($("h1"), 1.8, {
		css: {
			left: "-=20px"
		}
	}), 0);
	
	tlm.insert( TweenMax.to($(".bg").first(), .5, {
		css: {
			opacity: 1
		}
	}), .8);
	
	tlm.insert( TweenMax.to($(".main"), .5, {
		css: {
			opacity: 1
		}
	}), 1);
	
	tlm.insert( TweenMax.to($(".first"), .3, {
		css: {
			opacity: 1
		}
	}), 1.5);
	
	tlm.insert( TweenMax.to($(".second"), .3, {
		css: {
			opacity: 1
		}
	}), 2.2);
	
	tlm.staggerTo( $("li"), .3, {
		css: {
			opacity: 1
		}
	}, .1, 0, 1.5);
	
	tlm.insert( TweenMax.to($("footer p"), .3, {
		css: {
			opacity: 1
		}
	}), 2.6);
	
	tlm.insert( TweenMax.to($("footer img"), .3, {
		css: {
			scaleX: 1
		}
	}), 2.6);
	
	tlm.play();
	
	function playGallery(){
		//console.log($(".bg").siblings());
		$(".bg").first().css({
			opacity: 0
		})
		gallery.images = $(".bg");
		gallery.make();
		gallery.play();
	}
})()