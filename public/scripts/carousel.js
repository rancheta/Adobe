// Basic Carousel

var carouselHolder = document.getElementById('carouselHolder')
var imagesArray = []
var currentOffset = 0

function createImage(imageObject) {
	var url = 'https://farm' + imageObject.farm + '.staticflickr.com/' + imageObject.server + 
				'/' + imageObject.id + '_' + imageObject.secret + '.jpg'
	var img = new Image()
	img.src = url
	img.style.height = '300px'
	img.className = 'carouselImg'
	return img
}

function buildCarousel(photoArray) {
	var totalCarouselWidth = 0
	if (photoArray.length > 30) {
		photoArray.splice(31, photoArray.length - 31)
	};
	for (var i = 0; i < photoArray.length; i++) {
		var previousImg = i > 0 ? createImage(photoArray[i - 1]) : null
		var img = createImage(photoArray[i])
		img.style.left = 0 + 'px'
		if (previousImg) {
			totalCarouselWidth = previousImg.width + totalCarouselWidth
			img.style.left = totalCarouselWidth + 'px'
		}
		imagesArray.push(img)
		carouselHolder.appendChild(img) 
	};
	currentOffset = totalCarouselWidth
}

function getCurrentPosition(transformString) {
	return Number(transformString.replace('translateX(', '').replace('px)', ''))
}

function rotateCarouselCounterClockwise() {
	for (var i = 0; i < imagesArray.length; i++) {
		var currentPosition = getCurrentPosition(imagesArray[i].style.transform)
		console.log(imagesArray[i].style.transform, currentPosition)
		imagesArray[i].style.transform = 'translateX(' + (currentPosition + 300) + 'px)'
	};
}
function rotateCarouselClockwise() {
	for (var i = 0; i < imagesArray.length; i++) {
		var currentPosition = getCurrentPosition(imagesArray[i].style.transform)
		console.log(imagesArray[i].style.transform, currentPosition)
		imagesArray[i].style.transform = 'translateX(' + (currentPosition - 300) + 'px)'
	};
}

// Get FlickrData and initiate creation of carousel
var apiKey = getInsecureAuthDetails().key
var flickrUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search' + 
				'&api_key=' + apiKey + '&lat=47.6062&lon=122.332&format=json&nojsoncallback=?' 
httpGetUrl(flickrUrl, function(data) {
	console.log(JSON.parse(data))
	buildCarousel(JSON.parse(data).photos.photo)
})
