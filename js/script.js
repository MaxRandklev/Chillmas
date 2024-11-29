// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Section Fade-In on Scroll
const sections = document.querySelectorAll('section');

const options = {
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
      if(entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
      }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});

// Snowflake generation
const snowflakeCount = 50; // Initial number of snowflakes
const snowflakeMax = 100;   // Maximum number of snowflakes
const snowflakeInterval = 1000; // Interval to add new snowflakes (in ms)

// Function to create a single snowflake
function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');

  // Random size between 5px and 15px
  const size = Math.random() * 10 + 5;
  snowflake.style.width = `${size}px`;
  snowflake.style.height = `${size}px`;

  // Random horizontal position (0% to 100% of viewport width)
  snowflake.style.left = `${Math.random() * 100}vw`;

  // **Updated:** Random animation duration between 3s and 8s (faster fall)
  const duration = Math.random() * 5 + 3; // 3s to 8s
  snowflake.style.animationDuration = `${duration}s`;

  // **Optional:** Adjust animation delay to ensure continuity
  snowflake.style.animationDelay = `${Math.random() * 5}s`; // 0s to 5s

  // Random opacity between 0.3 and 0.8
  snowflake.style.opacity = Math.random() * 0.5 + 0.3;

  document.body.appendChild(snowflake);
}

// Create initial snowflakes
for(let i = 0; i < snowflakeCount; i++) {
  createSnowflake();
}

// Continuously add snowflakes up to the maximum count
setInterval(() => {
  const currentSnowflakes = document.querySelectorAll('.snowflake').length;
  if(currentSnowflakes < snowflakeMax) {
      createSnowflake();
  }
}, snowflakeInterval);
