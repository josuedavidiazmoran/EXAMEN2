  var username = 'josuediaz';
  var password = '123';
  $("#boton").click(function() {
      var user = $("#username").val();
      var pass = $("#password").val();
      if (user == username && pass == password) {
          sessionStorage.setItem('user', user);
          window.location = 'home.html';
      } else {
          window.location = 'examen.html';
      }

  });