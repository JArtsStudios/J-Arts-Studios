// script.js
document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search').value.trim();
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (query.length === 0) {
        resultsContainer.innerHTML = '<p>Por favor ingresa un término de búsqueda.</p>';
        resultsContainer.classList.remove('show');
        return;
    }

    // Simular búsqueda
    const results = search(query);

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No se encontraron resultados.</p>';
    } else {
        results.forEach(result => {
            const resultElement = document.createElement('a');
            resultElement.href = result.url;
            resultElement.textContent = result.title;
            resultElement.className = 'result-item';
            resultsContainer.appendChild(resultElement);
        });
    }

    resultsContainer.classList.add('show');
});

function search(query) {
    // Lista de páginas disponibles
    const pages = [
        { title: 'Inicio', url: 'home.html' },
        { title: 'Multimedia', url: 'multimedia.html' },
        { title: 'Hablemos', url: 'hablemos.html' }
    ];

    return pages.filter(page => page.title.toLowerCase().includes(query.toLowerCase()));
}



document.getElementById('downloadBtn').addEventListener('click', function() {
    // Crea un elemento <a> para la descarga
    const link = document.createElement('a');
    link.href = '../img/mano.webp'; // Reemplaza con la ruta de tu archivo
    link.download = 'mano.webp'; // Nombre del archivo a descargar

    // Añade el elemento al DOM (aunque no será visible)
    document.body.appendChild(link);

    // Activa el clic en el enlace para iniciar la descarga
    link.click();

    // Remueve el elemento después de la descarga
    document.body.removeChild(link);
});
