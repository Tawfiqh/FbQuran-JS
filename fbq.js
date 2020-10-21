function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
document.addEventListener("DOMContentLoaded", function(event) { 

		var a = getRandomInt(1,114);

		var lens = [7,286,200,176,120,165,206,75,129,109,123,111,43,52,99,128,111,110,98,135,
		112,78,118,64,77,227,93,88,69,60,34,30,73,54,45,83,182,88,75,85,54,53,89,
		59,37,35,38,29,18,45,60,49,62,55,78,96,29,22,24,13,14,11,11,18,12,12,30,
		52,52,44,28,28,20,56,40,31,50,40,46,42,29,19,36,25,22,17,19,26,30,20,15,
		21,11,8,8,19,5,8,8,11,11,8,3,9,5,4,7,3,6,3,5,4,5,6];


		var b = getRandomInt(1, lens[a-1]);
		console.log("a:"+ a + " b:" + b);
		var destination ="https://www.quran.com/" + a + '/' + b
		var furtherDestination ="https://www.quran.com/" + a + '/' + Math.max(1, b - 6) + '-' + Math.min(b+8,lens[a-1]);

		console.log(destination);
		window.location.replace(furtherDestination);

		document.getElementById('quran-iframe').src = destination;
		document.getElementById('further-quran-read').href = furtherDestination;
		// 		"<iframe id=\"my-iframe\" src=\"https://www.quran.com/$a/$b\" frameborder=\"0\" scrolling=\"yes\"></iframe>";

});
