// access mode button HTML element
const themeSwitcher = document.querySelector('#light-dark-mode');
const container = document.querySelector('.container');

// Set default mode to light
let mode = 'light';

// Listen for a click event on mode button
themeSwitcher.addEventListener('click', function () {
  // If mode is light, apply dark background
  if (mode === 'light') {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  }

  // If mode is dark, apply light background
  else {
    mode = 'light';
    container.setAttribute('class', 'light');
  }
});

// access blog entry fields
const blogUser = document.querySelector('#username');
const blogTitle = document.querySelector('#blog-title');
const blogContent = document.querySelector('#content');
const submitBtn = document.querySelector('#submit');


