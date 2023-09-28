// const body = document.body;

//         body.addEventListener('mousemove', (e) => {
//             const x = e.clientX / window.innerWidth;
//             const y = e.clientY / window.innerHeight;

//             const red = Math.round(x * 255);
//             const green = Math.round(y * 255);
//             const blue = 100; // You can set your preferred value here

//             const color = `rgb(${red},${green},${blue})`;

//             body.style.backgroundColor = color;
//         });
const toggleButton = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
toggleButton.addEventListener('click',()=>{
    navLinks.classList.toggle('active');
})