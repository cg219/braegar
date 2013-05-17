/* 
	@codekit-prepend "TweenMax.min.js"
*/

var slides = $(".intro .wrapped").children();
var nav = $("nav");
var tweens = [];

$.each(slides, function(i, val){
	if( i === 14 ){
		tweens.push(TweenMax.to(slides[i], .6, {
			css: {
				opacity: 1
			},
			delay: 1.4
		}));
	}
	else{
		tweens.push(TweenMax.to(slides[i], .1, {
			css: {
				opacity: 1
			}
		}));
	}
});

tweens.push(TweenMax.to(nav, .5, {
	css: {
		opacity: 1
	},
	delay: 2
}));

var tlm = new TimelineMax({
	tweens: tweens,
	stagger: .1
});

tlm.play();