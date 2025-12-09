// Get references to the buttons
const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
const button3 = document.getElementById('btn3');

// Add click event listeners
button1.addEventListener('click', () => {
    console.log('Button 1 was clicked!');
    alert('You clicked Button 1!');
});

button2.addEventListener('click', () => {
    console.log('Button 2 was clicked!');
    alert('You clicked Button 2!');
});

button3.addEventListener('click', () => {
    console.log('Button 3 was clicked!');
    alert('You clicked Button 3!');
});

console.log('index.js loaded successfully.');