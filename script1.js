let currentImageIndex = 0;
const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg"
    // Add more images as needed
];

function openImage(index) {
    currentImageIndex = index;
    document.getElementById("fullImage").src = images[currentImageIndex];
}

function prevImage() {
    currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : images.length - 1;
    document.getElementById("fullImage").src = images[currentImageIndex];
}

function nextImage() {
    currentImageIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0;
    document.getElementById("fullImage").src = images[currentImageIndex];
}

