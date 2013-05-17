/* 
	@codekit-prepend "TweenMax.min.js"
	@codekit-prepend "kreative-gallery.js"
*/
(function(){
	var lastItem;
	var holder = $(".holder");
	var intro = new TimelineLite();
	var gallery = new KreativeGallery();
	var rightB = $("button.right");
	var leftB = $("button.left");
	var current = 0;
	
	$(".title").on("click", function(){
		if(lastItem){
			lastItem.next().slideUp();
			holder.empty();
			
			if( (lastItem[0] != $(this)[0]) || (($(this).attr("data-open") == "false") && (lastItem[0] == $(this)[0])) ){
				$(this).attr("data-open", "true").next().slideDown();
				gallery.stop();
				current = 0;
				placeImages($(this), true);
				TweenLite.to(holder.children()[0], .5, {
					css: {
						autoAlpha: 1
					}
				});
		
				if( leftB.css("opacity") < 1 ){
					fadeArrows("in");
				}
			}
			else{
				lastItem.attr("data-open", "false");
				placeImages(holder);
				makeGallery();
				gallery.play();
		
				if( leftB.css("opacity") == 1 ){
					fadeArrows("out");
				}
			}
		}
		else{
			$(this).attr("data-open", "true").next().slideDown();
			holder.empty();
			gallery.stop();
			current = 0;
			placeImages($(this), true);
			TweenLite.to(holder.children()[0], .5, {
				css: {
					autoAlpha: 1
				}
			});
		
			if( leftB.css("opacity") < 1 ){
				fadeArrows("in");
			}
		}
		
		lastItem = $(this);
	});
	
	rightB.on("click", function(){
		//gallery.next();
		TweenLite.to(holder.children()[current], .3, {
			css: {
				autoAlpha: 0
			}
		});
		count(1);
		TweenLite.to(holder.children()[current], .3, {
			css: {
				autoAlpha: 1
			},
			delay: .2
		});
	});
	
	leftB.on("click", function(){
		//gallery.prev();
		TweenLite.to(holder.children()[current], .3, {
			css: {
				autoAlpha: 0
			}
		});
		count(-1);
		TweenLite.to(holder.children()[current], .3, {
			css: {
				autoAlpha: 1
			},
			delay: .2
		});
	});
	
	makeGallery();
	gallery.play();
	
	intro.staggerTo($(".eventList .title"), .3, {
		css: {
			autoAlpha: 1
		},
		ease: Expo.easeOut
	}, .1);
	
	function fadeArrows(type){
		type = type === "in" ? 1 : 0;
		
		TweenLite.to(leftB, .5, {
			css: {
				opacity: type
			}
		});
		
		TweenLite.to(rightB, .5, {
			css: {
				opacity: type
			}
		});
	}
	
	function count(dir){
		if(dir >= 0){
			current = (current === holder.children().length - 1 ) ? 0 : current + 1;
		}
		else{
			current = (current === 0 ) ? holder.children().length - 1 : current - 1;
		}
	}
	
	function placeImages(target, fade){
		var images = target.attr("data-images").split(", ");
		var captions = JSON.parse(holder.attr("data-captions"));
		var frag = "<div class='image'><img src='{{src}}' /><p>{{caption}}</p></div>";
		
		$.each(images, function(index, value){
			var newFrag = frag.replace("{{src}}", "images/" + value + ".jpg");
			
			if( captions[value] != undefined ){
				holder.append( newFrag.replace("{{caption}}", captions[value]) );
			}
			else{
				holder.append( newFrag.replace("{{caption}}", "") );
			}
			//console.log(frag);
			
			
		});
		
		if( fade ){
			TweenLite.to(holder.children()[0], .5, {
				css: {
					autoAlpha: 1
				}
			});
		}
	}
	
	function makeGallery(){
		gallery.images = holder.children();
		gallery.make();
	}
})()