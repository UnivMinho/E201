
//fazer login com o google
function handleCredentialResponse(response) {
         
    const data = jwt_decode(response.credential)
    console.log(data)
    
}

window.onload = function () {
  google.accounts.id.initialize({
    client_id: "932802561664-5oiqag4hpkfi66opbu69h6piqo8kmfkt.apps.googleusercontent.com",
    callback: handleCredentialResponse
  });
  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    { theme: "outline", size: "large"}  // customization attributes
  );
  google.accounts.id.prompt(); // also display the One Tap dialog
}

//fim login com o google