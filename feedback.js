document.getElementById('feedback-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Simulate form submission (in real case, you would send data to server)
  setTimeout(function() {
      document.getElementById('feedback-form').reset();
      document.getElementById('success-message').classList.remove('hidden');
  }, 1000);
});