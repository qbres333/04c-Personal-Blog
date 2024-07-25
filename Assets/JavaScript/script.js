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



// // access blog entry fields
// const blogUser = document.querySelector('#username');
// const blogTitle = document.querySelector('#blog-title');
// const blogContent = document.querySelector('#content');
// const submitBtn = document.querySelector('#submit');

// // save blog entry object locally
// function saveBlogEntry() {
//   // store blog entry data as an object 
//   const blogPost = {
//     blogUser: blogUser.value,
//     blogTitle: blogTitle.value,
//     blogContent: blogContent.value.trim()
//   };

//   // Store new blog post in local storage and convert it to a string
//   localStorage.setItem('blogPost', JSON.stringify(blogPost));
// }

// // render blog entry on new page
// function renderBlogEntry() {
//   // parse the blogPost object
//   const blogEntry = JSON.parse(localStorage.getItem('blogPost'));

//   // if there's data to return, set html values
//   if (blogEntry !== null) {
//     document.getElementById('blog-title').innerHTML = blogEntry.blogUser;
//     document.getElementById('content').innerHTML = blogEntry.blogContent;
//     document.getElementById('username').innerHTML = blogEntry.blogUser;

//   }
// }


// submitBtn.addEventListener('click', function (event) {
//   event.preventDefault();

//   saveBlogEntry();
//   renderBlogEntry();  

// });


// // The init() function fires when the page is loaded
// function init() {
//   // When the init function is executed, the code inside renderLastGrade function will also execute
//   renderBlogEntry();
// }
// init();


// access blog entry fields
const blogUser = document.querySelector('#username');
const blogTitle = document.querySelector('#blog-title');
const blogContent = document.querySelector('#content');
const submitBtn = document.querySelector('#submit');

// access unordered list in HTML file
const entryList = document.querySelector('#entry-list');

// this is the empty list to be filled with blog entries
let entries = [];

// save blog entry object locally when submitted
submitBtn.addEventListener('click', function saveBlogEntry(event) {
    event.preventDefault();
    
    // store blog entry data as an object 
    const blogEntry = {
      blogUser: blogUser.value,
      blogTitle: blogTitle.value,
      blogContent: blogContent.value.trim()
    };

    // add the blog entry to the entries array
    entries.push(blogEntry);

    // Store new blog post in local storage and convert it to a string
    localStorage.setItem('entries', JSON.stringify(entries));

    // show the entries list
    renderEntries();

    // clear the form fields
    blogUser.value = '';
    blogTitle.value = '';
    blogContent.value = '';

});

// render blog entries on new page
function renderEntries() {
  // default list to an empty string
  entryList.innerHTML = '';

  for (let i = 0; i < entries.length; i++) {
    const blogEntry = entries[i];

    const li = document.createElement('li');
    // li.textContent = blogEntry;
    li.textContent = `Title: ${blogEntry.blogTitle} | Content: ${blogEntry.blogContent} | User: ${blogEntry.blogUser}`;
    entryList.appendChild(li);
  }
}

// The init() function fires when the page is loaded
function init() {
  const storedEntries = JSON.parse(localStorage.getItem('entries'));

  // if there are blog entries, re-assign them to the stored entries
  if(storedEntries !== null) {
    entries = storedEntries;
  }
  // When the init function is executed, show the entries on the 2nd webpage
  renderEntries();
}
init();