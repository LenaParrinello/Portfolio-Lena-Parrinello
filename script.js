// Get all navigation elements
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');
const projectCards = document.querySelectorAll('.project-card');
const backButtons = document.querySelectorAll('.back-button');

// Function to show a specific page
function showPage(pageId) {
    // Hide all pages
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    // Update active nav link
    navLinks.forEach(link => {
        if (link.dataset.page === pageId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Scroll to top of page
    window.scrollTo(0, 0);
}

// Event listener for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const pageId = this.dataset.page;
        showPage(pageId);
    });
});

// Event listener for project cards on home page
projectCards.forEach(card => {
    card.addEventListener('click', function() {
        const projectId = this.dataset.project;
        showPage(projectId);
    });
});

// Event listener for back buttons
backButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const pageId = this.dataset.page;
        showPage(pageId);
    });
});