function emailIsCorrect(value){
    const regEmail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');

    if (regEmail.test(value)){    
    return true;
    } 
    return false;
}
function nameIsCorrect(value) {
    value = value.trim();
    if(value !== "" && value.length >= 2 && value !== null){
        return true;
    }
        return false;
}

function passwordIsCorrect(value) {
    value = value.trim();
    if(value !== "" && value.length >= 5 && value !== null){
        return true;
    }
        return false;
}

export {emailIsCorrect, nameIsCorrect, passwordIsCorrect}