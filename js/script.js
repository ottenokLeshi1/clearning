$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
		menu: '#myMenu'
	});
});















/*$( document ).ready(function() {
	let scrolledPrev = 0;
	let scrollContainers = [];
	$(".scroll").each(function() {
	    scrollContainers.push($(this)[0]);
	});
	console.log(scrollContainers)  

    window.onscroll = function() {
		let scrolled = window.pageYOffset || document.documentElement.scrollTop;
		const cutPosition = findCut(scrollContainers.map(container => $(container).offset().top - 50), scrolled);
		if (scrolledPrev - scrolled < 0){
			console.log("Down "+ scrolled)
		}	else {
			console.log("Up "+ scrolled)
		}
		scrolledPrev = scrolled;
	}
});

const findCut = (array, elem) => {
	let begin = 0;
	let end = array.length - 1;
	let middle = 0;

	while (end - begin > 1) {
		middle = Math.floor((end + begin)/2);
		if (elem < array[middle]) {
			end = middle;
		} else {
			begin = middle
		}
	}
	return [begin, end]
}*/