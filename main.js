function verifyPassword(){
    const password = document.getElementById("passwordInput");
    const confirmPassword = document.getElementById("confirm_passwordInput");
    const createButton = document.getElementById("createButton");
    const matchingTxt = document.getElementById("matching");
    if (confirmPassword.value) {
    if (password.value != confirmPassword.value) {
       matchingTxt.style.display = 'block';
       matchingTxt.style.color = 'red';
       matchingTxt.innerHTML = 'Not Matching';
       e.preventDefault();
       return false;
       
       
       

    } else {
        matchingTxt.style.display = 'block';
        matchingTxt.style.color = 'green';
        matchingTxt.innerHTML = 'Matching';
        return true;
    }
    } 
    else {
        matchingTxt.style.display = 'none'
    }  
}