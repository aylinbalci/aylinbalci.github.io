document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            const catImage = document.getElementById('catImage');
            catImage.src = data[0].url;
        })
        .catch(error => console.error('Error fetching cat image:', error));
}); 