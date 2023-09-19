document.addEventListener("DOMContentLoaded", function () {

//show or hide sidebar
  const menuBtn = document.querySelector("#menu-btn");
  const closeBtn = document.querySelector("#close-btn");
  const sidebar = document.querySelector("aside");

  menuBtn.addEventListener('click', () => {
    sidebar.style.display = 'block';
  })

  closeBtn.addEventListener('click', () => {
    sidebar.style.display = 'none';
  })


//change theme
  const themeBtn = document.querySelector('.theme-btn');

  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');
  })

  //change page
// Get all sidebar links
  const sidebarLinks = document.querySelectorAll('.sidebar a');

// Function to set the active link based on the current URL
  function setActiveLinkBasedOnURL() {
    const currentURL = window.location.pathname;

    // Remove the 'active' class from all links
    sidebarLinks.forEach((sidebarLink) => {
      sidebarLink.classList.remove('active');
    });

    // Find the link that matches the current URL and add the 'active' class
    sidebarLinks.forEach((sidebarLink) => {
      const href = sidebarLink.getAttribute('href');
      if (href === currentURL) {
        sidebarLink.classList.add('active');
      }
    });
  }

// Add a click event listener to each link
  sidebarLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      // Remove the 'active' class from all links
      sidebarLinks.forEach((sidebarLink) => {
        sidebarLink.classList.remove('active');
      });

      // Add the 'active' class to the clicked link
      link.classList.add('active');
    });
  });

// Call the function to set the active link based on the current URL when the page loads
  window.addEventListener('load', setActiveLinkBasedOnURL);
});
