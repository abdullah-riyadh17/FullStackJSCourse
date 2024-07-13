document.addEventListener('DOMContentLoaded', () => {
    const selectEl = document.getElementById('select-btn');
    const modifyEl = document.getElementById('modify-btn');
    const fetchEl = document.getElementById('fetch-btn');
    const inputEl = document.querySelector('.input');

    // Console log the input-related events (input, change, keyup, keydown)
    inputEl.addEventListener('input', (event) => {
        console.log('Input event:', event.target.value);
    });

    inputEl.addEventListener('change', (event) => {
        console.log('Change event:', event.target.value);
    });

    inputEl.addEventListener('keyup', (event) => {
        console.log('Keyup event:', event.key);
    });

    inputEl.addEventListener('keydown', (event) => {
        console.log('Keydown event:', event.key);
    });

    // Select all elements on click on "selectEl" and console log them
    selectEl.addEventListener('click', () => {
        const box1 = document.getElementById('box1');
        const box2 = document.getElementById('box2');
        const box3 = document.getElementById('box3');
        console.log('Box 1:', box1);
        console.log('Box 2:', box2);
        console.log('Box 3:', box3);
    });

    // Modify any content on click on "modifyEl" button
    modifyEl.addEventListener('click', () => {
        const box1 = document.getElementById('box1');
        const box2 = document.getElementById('box2');
        const box3 = document.getElementById('box3');
        
        box1.textContent = 'Modified';
        box2.style.backgroundColor = 'black';
        box3.innerHTML = '<strong>Box</strong>';
    });

    // Fetch data from JSONPlaceholder on click on "fetchEl" button and log the data
    fetchEl.addEventListener('click', async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const posts = await response.json();
            console.log('First 10 posts:', posts.slice(0, 10));
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    });
});
