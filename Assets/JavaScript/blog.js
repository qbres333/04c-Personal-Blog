let entries = [];

// render blog entries on new page
function renderBlog() {
    // convert object to text
    const entries = JSON.parse(localStorage.getItem('entries'));
    console.log(entries);
    
    for (const blog of entries) {
        const blogPost = `
            <li>
                <div class="d-flex w-100">
                    <h5 class="mb-1"><span id="blog-title">${blog.blogTitle}</span></h5>
                </div>
                <p class="mb-1"><span id="content"></span></p>
                <small>Posted By: <span id="username"></span></small>
            </li>
    `
    }
    
}
    

// The init() function fires when the page is loaded
function init() {
    const storedEntries = JSON.parse(localStorage.getItem('entries'));
  
    // if there are blog entries, re-assign them to the stored entries
    if(storedEntries) {
      entries = storedEntries;
    }
    renderBlog();
  }
  init();