// List of image URLs
const images = [
    "images/img1.jpeg",
    "images/img2.jpeg",
    "images/img3.jpeg",
    "images/img4.jpeg",
    "images/img5.jpeg",
    "images/img6.jpeg",
    "images/img7.jpg",
    "images/img8.jpg",
    "images/img9.jpg",
    "images/img10.jpg",
    "images/img11.jpg",
    "images/img12.jpg",
    "images/img13.jpg",
    "images/img14.jpg",
    "images/img15.jpeg",
    "images/img16.jpg",
    "images/img17.jpg",
    "images/img19.jpg",
    "images/img20.jpg",
];
// Create a shuffled copy of the images array
let shuffledImages = [];
let currentIndex = 0;

// Function to shuffle an array
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Function to display the next image
function showNextImage() {
    // Get the image element
    const randomImageElement = document.getElementById("random-image");

    // If all images have been shown, reshuffle the list
    if (currentIndex >= shuffledImages.length) {
        shuffledImages = shuffleArray([...images]);
        currentIndex = 0;
    }

    // Set the image source to the next image in the list
    randomImageElement.src = shuffledImages[currentIndex];
    currentIndex++;
}

// Set up error handling for broken images
document.getElementById("random-image").onerror = function() {
    this.src = "fallback-image.jpg";  // Fallback image if the image is not found
    console.error("Image not found: " + this.src);
};

// Initialize the shuffled images and set the first image
shuffledImages = shuffleArray([...images]);
showNextImage();

// Add event listener to the button
document.getElementById("random-button").addEventListener("click", showNextImage);

// Disable right-click on images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        alert("Right-click is disabled on images.");
    });
});

