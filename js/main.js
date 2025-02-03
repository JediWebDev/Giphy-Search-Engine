document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

document.getElementById('search-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value.trim();
    if (!query) return;
    
    const apiKey = 'YOUR_GIPHY_API_KEY';
    const url = `https://api.giphy.com/v1/gifs/search?q=${query}&limit=12&api_key=${apiKey}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        const gifContainer = document.getElementById('gif-container');
        gifContainer.innerHTML = '';
        
        data.data.forEach(gif => {
            const img = document.createElement('img');
            img.src = gif.images.fixed_height.url;
            img.alt = query;
            img.classList.add('gif');
            gifContainer.appendChild(img);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});