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


// Function to set the theme based on user preference
  function setTheme(theme) {
    document.body.classList.toggle('dark-theme', theme === 'dark');
  }

// Function to toggle the theme and save the preference
  function toggleTheme() {
    const isDarkMode = document.body.classList.contains('dark-theme');
    const newTheme = isDarkMode ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Store the preference in localStorage
  }

// Initialize theme based on user preference or default to light mode
  const storedTheme = localStorage.getItem('theme');
  setTheme(storedTheme || 'light');

// Add event listener to the theme button
  const themeBtn = document.querySelector('.theme-btn');
  themeBtn.addEventListener('click', toggleTheme);

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

  /* ================ FUNDS ================ */

  const optionMenuDeposit = document.querySelector(".select-menu-deposit"),
    selectBtnDeposit = optionMenuDeposit.querySelector(".select-btn-deposit"),
    optionsDeposit = optionMenuDeposit.querySelectorAll(".option"),
    sBtn_textDeposit = optionMenuDeposit.querySelector(".sBtn-text-deposit");

  selectBtnDeposit.addEventListener("click", () => optionMenuDeposit.classList.toggle("active"));

  optionsDeposit.forEach(option => {
    option.addEventListener("click", () => {
      sBtn_textDeposit.innerText = option.querySelector(".option-text").innerText;

      optionMenuDeposit.classList.remove("active");
    })
  });


  const optionMenuWithdraw = document.querySelector(".select-menu-withdraw"),
    selectBtnWithdraw = optionMenuWithdraw.querySelector(".select-btn-withdraw"),
    optionsWithdraw = optionMenuWithdraw.querySelectorAll(".option"),
    sBtn_textWithdraw = optionMenuWithdraw.querySelector(".sBtn-text-withdraw");

  selectBtnWithdraw.addEventListener("click", () => optionMenuWithdraw.classList.toggle("active"));

  optionsWithdraw.forEach(option => {
    option.addEventListener("click", () => {
      sBtn_textWithdraw.innerText = option.querySelector(".option-text").innerText;
      optionMenuWithdraw.classList.remove("active");
    })
  });


});




