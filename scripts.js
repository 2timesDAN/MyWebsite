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

// Get the image element and button
const randomImageElement = document.getElementById("random-image");
const randomButton = document.getElementById("random-button");

// Function to display a random image
function showRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    randomImageElement.src = images[randomIndex];
}

// Set an initial random image
showRandomImage();

// Add event listener to the button
randomButton.addEventListener("click", showRandomImage);


// Disable right-click on images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        alert("Right-click is disabled on images.");
    });
});

