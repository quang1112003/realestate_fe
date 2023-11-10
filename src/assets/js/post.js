$(document).ready(function () {
    $('#media').on('change', function () {
      // Loop through selected files and create image thumbnails
      for (let i = 0; i < this.files.length; i++) {
        const file = this.files[i];
  
        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = function (e) {
            // Create an image element and set its source to the data URL
            const img = document.createElement('img');
            img.src = e.target.result;
            img.classList.add('thumbnail'); // Optional: add a CSS class for styling
  
            // Append the image to the preview container
            $('#image-preview-container').append(img);
          };
          reader.readAsDataURL(file);
        }
      }
    });
  });
  