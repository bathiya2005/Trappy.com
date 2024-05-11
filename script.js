document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  
  // You can perform further validation here
  
  // Assuming sending data to a server, for demonstration just show a message
  document.getElementById("response").innerHTML = "Sending message...";

  // Simulate an AJAX request with setTimeout
  setTimeout(function() {
      document.getElementById("response").innerHTML = "Message sent successfully!";
      document.getElementById("contact-form").reset();
  }, 2000);
});
