function checkPswd() {
    var confirmPassword = "PEFTERETVLEMAST";
    var password = document.getElementById("pswd").value;
    if (password == confirmPassword) {
      window.location = "welcome.html";
    }
  }
