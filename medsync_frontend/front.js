async function greet() {
    const nameInput = document.getElementById('nameInput');
    const greetMessage = document.getElementById('greetMessage');

    try {
        const response = await fetch(`http://localhost:8000/greet?name=${nameInput.value}`);
        const data = await response.json();

        greetMessage.textContent = data;
    } catch (error) {
        console.error('Error greeting:', error);
        greetMessage.textContent = 'Error greeting. Please try again.';
    }
}