document.addEventListener('DOMContentLoaded', function() {
    const choice = localStorage.getItem('animalChoice');
    const title = document.getElementById('title');
    const animalImage = document.getElementById('animalImage');
    animalImage.style.maxWidth = '100%';
    animalImage.style.height = 'auto';

    let currentAnimal = choice === 'both' ? 'cat' : choice;

    function fetchAnimalImage() {
        if (currentAnimal === 'cat') {
            title.textContent = choice === 'both' ? 'Random Cats or Dogs' : 'Random Cats';
            fetch('https://api.thecatapi.com/v1/images/search')
                .then(response => response.json())
                .then(data => {
                    animalImage.src = data[0].url;
                })
                .catch(error => console.error('Error fetching cat image:', error));
            if (choice === 'both') currentAnimal = 'dog';
        } else if (currentAnimal === 'dog') {
            title.textContent = choice === 'both' ? 'Random Cats or Dogs' : 'Random Dogs';
            fetch('https://dog.ceo/api/breeds/image/random')
                .then(response => response.json())
                .then(data => {
                    animalImage.src = data.message;
                })
                .catch(error => console.error('Error fetching dog image:', error));
            if (choice === 'both') currentAnimal = 'cat';
        } else {
            alert('No choice made. Please go back and select "cat" or "dog".');
        }
    }

    animalImage.addEventListener('click', fetchAnimalImage);
    fetchAnimalImage();
}); 