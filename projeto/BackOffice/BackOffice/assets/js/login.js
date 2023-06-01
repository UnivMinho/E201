function handleCredentialResponse(response) {
         
    const data = jwt_decode(response.credential)
    console.log(data)

    url = "Perfil.html" + "?login=true";
    window.location.href = url;
}

window.onload = function () {
  google.accounts.id.initialize({
    client_id: "932802561664-ba5cdhglne0ik5sg65e1qs1mtveh573t.apps.googleusercontent.com",
    callback: handleCredentialResponse
  });
  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    { theme: "outline", size: "large"}  // customization attributes
  );
  google.accounts.id.prompt(); // also display the One Tap dialog
}


//fim login com o google

