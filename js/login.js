document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "cafe123") {
    window.location.href = "index.html";
  } else {
    document.getElementById("error-message").textContent = "Credenciales incorrectas.";
  }
});
