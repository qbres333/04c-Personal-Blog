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
const form = document.querySelector('#form');
const submitBtn = document.querySelector('#submit');

// access unordered list in 2nd HTML file
const entryList = document.querySelector('#entry-list');
let entries = [];

function saveBlogEntry() {
  // store blog entry data as an object 
  const blogEntry = {
    blogUser: blogUser.value,
    blogTitle: blogTitle.value,
    blogContent: blogContent.value.trim()
  };

  // add the blog entry to the entries array
  entries.push(blogEntry);

  // Store the updated array in local storage and convert it to a string
  localStorage.setItem('entries', JSON.stringify(entries));
}


function redirectToBlog() {
  location.href='blog.html';
}


// save blog entry object locally when submitted
submitBtn.addEventListener('click', function saveBlogEntry(event) {
    event.preventDefault();
    
    // show the entries list
    redirectToBlog();

    // clear the form fields
    blogUser.value = '';
    blogTitle.value = '';
    blogContent.value = '';

});


// The init() function fires when the page is loaded
function init() {
  const storedEntries = JSON.parse(localStorage.getItem('entries'));

  // if there are blog entries, re-assign them to the stored entries
  if(storedEntries) {
    entries = storedEntries;
  }
 
}
init();