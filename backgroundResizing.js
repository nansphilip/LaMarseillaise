const image = document.getElementById("background");
const imageWidth = image.naturalWidth;
const imageHeight = image.naturalHeight;
const imageRatio = imageWidth / imageHeight;

function whichIsBigger() {
	const width = window.innerWidth;
	const height = window.innerHeight;
    const viewportRatio = width / height;

	const whichIsBigger = width > height ? ["width", width, viewportRatio] : ["height", height, viewportRatio];

	return whichIsBigger;
}

function imageResize() {
	const viewportMaxSize = whichIsBigger();

	if (viewportMaxSize[0] === "width" && viewportMaxSize[2] > imageRatio) {
		image.style.width = "100%";
		image.style.height = "auto";
	} 
    else if (viewportMaxSize[0] === "width" && viewportMaxSize[2] < imageRatio) {
		image.style.width = "auto";
		image.style.height = "100%";
    }
    else {
		image.style.width = "auto";
		image.style.height = "100%";
	}
}

// Initial sizing
imageResize();

// Auto resizing
window.addEventListener("resize", () => {
    imageResize();
});
