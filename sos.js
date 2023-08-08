let value = 0;
const targetValue = 150;

const interval = setInterval(() => {
  value += 1;
  document.querySelector(".odometer").innerHTML = value;

  if (value >= targetValue) {
    clearInterval(interval);
  }
}, 20); // Update every 50 milliseconds for smoother animation
