/* 
	@codekit-prepend "TweenMax.min.js"
	@codekit-prepend "kreative-gallery.js"
*/

(function(){
	/*var tlm = new TimelineMax({onComplete: playGallery});
	var gallery = new KreativeGallery($(".bg"), 0, .1, 0, false, 0);
	tlm.play();
	
	function playGallery(){
		gallery.make("reverse");
		gallery.play();
	}*/
	
	var gallery = new KreativeGallery();
	function playGallery(){
		//console.log($(".bg").siblings());
		/*$(".bg").first().css({
			opacity: 0
		})*/
		gallery.images = $(".bg");
		gallery.make();
		gallery.play();
	}
	
	playGallery();
})()