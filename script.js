document.addEventListener('DOMContentLoaded', () => {
    const collage = document.getElementById('collage');
    const images = Array.from(collage.children);
    const collageWidth = collage.clientWidth;
    const collageHeight = collage.clientHeight;

    // Function to randomize the position and size of images while maintaining aspect ratio
    function randomizePositions() {
        images.forEach(image => {
            const imgElement = image.querySelector('img');
            const aspectRatio = imgElement.naturalWidth / imgElement.naturalHeight;

            // Set random width and calculate height to maintain aspect ratio
            const randomWidth = Math.random() * 500 + 150; // Random width between 150px and 350px
            const randomHeight = randomWidth / aspectRatio;

            // Ensure the image stays within the bounds of the collage
            const maxLeft = collageWidth - randomWidth;
            const maxTop = collageHeight - randomHeight;

            const randomLeft = Math.random() * maxLeft;
            const randomTop = Math.random() * maxTop;

            image.style.width = `${randomWidth}px`;
            image.style.height = `${randomHeight}px`;
            image.style.left = `${randomLeft}px`;
            image.style.top = `${randomTop}px`;
        });
    }

    randomizePositions();
    window.addEventListener('resize', randomizePositions); // Re-randomize on window resize
});
