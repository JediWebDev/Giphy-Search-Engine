document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

document.getElementById('search-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value.trim();
    if (!query) return;
    
    const apiKey = 'ourPIa5AFPGP92S60emt4uzg5TxgQHaS';
    const url = `https://api.giphy.com/v1/gifs/search?q=${query}&limit=30&api_key=${apiKey}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        const gifContainer = document.getElementById('gif-container');
        const resultCount = document.getElementById('result-count');
        gifContainer.innerHTML = '';

        // Update the result count text
        resultCount.textContent = `Showing ${data.data.length} results for "${query}"`;

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
