// Function to format time as HH:MM:SS
function formatTime(date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }
  
  // Function to format date as "Month Day, Year - DayOfWeek"
  function formatDate(date) {
    const options = { month: 'long', day: 'numeric', year: 'numeric', weekday: 'long' };
    return date.toLocaleDateString(undefined, options);
  }
  
  // Function to update clock
  function updateClock() {
    const now = new Date();
    document.getElementById('time').textContent = formatTime(now);
    document.getElementById('date').textContent = formatDate(now);
  }
  
  // Initial call and setInterval
  updateClock();
  setInterval(updateClock, 1000);
  