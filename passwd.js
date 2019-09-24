function checkPswd() {
    var confirmPassword = "tere";
    var password = document.getElementById("pswd").value;
    if (password == confirmPassword) {
      window.location = "welcome.html";
    }
  }
