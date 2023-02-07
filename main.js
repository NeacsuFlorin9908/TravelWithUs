function verifyPassword(){
    const password = document.getElementById("passwordInput");
    const confirmPassword = document.getElementById("confirm_passwordInput");
    const createButton = document.getElementById("createButton");
    const matchingTxt = document.getElementById("matching");
    const nameInput = document.getElementById("nameInput");
    const nameValue = document.getElementById("nameValue");
    if (confirmPassword.value) {
    if (password.value != confirmPassword.value) {
       matchingTxt.style.display = 'block';
       matchingTxt.style.color = 'red';
       matchingTxt.innerHTML = 'Not Matching';
       return false;
       
       
       

    } else {
        matchingTxt.style.display = 'block';
        matchingTxt.style.color = 'green';
        matchingTxt.innerHTML = 'Matching';
       // let name = new Object();
       // name.nameInput = nameInput.value;
        //nameValue.innerText = name.nameInput;
        //console.log(name.nameInput);
       // console.log(nameValue);
        return true;
    }
    } 
    else {
        matchingTxt.style.display = 'none'
    }  
    
}
