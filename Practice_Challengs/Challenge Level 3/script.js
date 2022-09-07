//Getting Common Value Finction
const gettingInputValue = (id) => {
    const inputFeild = document.getElementById(id);
    return inputFeild;
}

//INITIAL CHECKUP
const init = () => {
    let checkOldName = localStorage.getItem('Name');
    let checkOldEmail = localStorage.getItem('Email');
    let checkOldMessage = localStorage.getItem('Message');
    if(checkOldName || checkOldEmail || checkOldMessage){
        let oldValue = gettingInputValue('name');
        oldValue.value = checkOldName;
        let oldEmail = gettingInputValue('email');
        oldEmail.value = checkOldEmail;
        let oldMessage = gettingInputValue('message');
        oldMessage.value = checkOldMessage;
    }
}
init();


//Add Functionality
const commonSetItem = (btnID, inputFeildID, key) => {
    document.getElementById(btnID).addEventListener('click', function(){
        const nameValue = document.getElementById(inputFeildID).value;
        localStorage.setItem(key, nameValue);
    })
}


//Delete Functionality
const commonDelItem = (btnID, key) => {
    document.getElementById(btnID).addEventListener('click', function(){
        localStorage.removeItem(key);
    })
}


//Reset Functionality
const resetAll = () => {
    localStorage.clear();
}
//Add to LocalStorage
commonSetItem('name-send-btn', 'name', 'Name');
commonSetItem('email-send-btn', 'email', 'Email');
commonSetItem('message-send-btn', 'message', 'Message');

//Delete from LocalStorage
commonDelItem('name-del-btn', 'Name');
commonDelItem('email-del-btn', 'Email');
commonDelItem('message-del-btn', 'Message');
