// Function to fetch and display images from the "images" directory
async function displayImages() {
  try {
    const response = await fetch('images');
    const files = await response.json();
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = '';

    files.forEach(file => {
      const img = document.createElement('img');
      img.src = `images/${file}`;
      imageContainer.appendChild(img);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

// Display images on page load
displayImages();