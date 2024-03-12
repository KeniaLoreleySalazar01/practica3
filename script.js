function validateForm() {
  
  var name = document.getElementById("name").value;
  var password = document.getElementById("password").value;
  if (name == "Keny" && password == "123") {
    //alert("usuario y contrasena validos")
    window.open('content.html');
  } else {
    alert("no le sabes");
  }
  
};