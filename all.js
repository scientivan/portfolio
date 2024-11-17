function DropDown(){
    // const dropdown = document.querySelector('.nav-dropdown');
    const menu = document.querySelector('.nav-menu');
    // alert('tes');
    menu.classList.toggle('nav-menu-open');
}

document.addEventListener('DOMContentLoaded', () => {
    const portfolioButton = document.getElementById('portfolio-button');
    const portfolioDropdown = document.getElementById('portfolio-dropdown');

    // Toggle dropdown visibility when button is clicked
    portfolioButton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default behavior of anchor tag
        portfolioDropdown.classList.toggle('active');
    });
});

