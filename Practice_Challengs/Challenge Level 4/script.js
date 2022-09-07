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
    else{
        let oldValue = gettingInputValue('name');
        oldValue.value = '';
        let oldEmail = gettingInputValue('email');
        oldEmail.value = '';
        let oldMessage = gettingInputValue('message');
        oldMessage.value = '';
    }
}
init();


//Add Functionality
const commonSetItem = (btnID, inputFeildID, key) => {
    document.getElementById(btnID).addEventListener('click', function(){
        const nameElement = document.getElementById(inputFeildID);
        const nameValue = nameElement.value;
        localStorage.setItem(key, nameValue);
        nameElement.value = '';
    })
}


//Delete Functionality
const commonDelItem = (btnID, key) => {
    document.getElementById(btnID).addEventListener('click', function(){
        localStorage.removeItem(key);
        init();
    })
}



//Add to LocalStorage
commonSetItem('name-send-btn', 'name', 'Name');
commonSetItem('email-send-btn', 'email', 'Email');
commonSetItem('message-send-btn', 'message', 'Message');

//Delete from LocalStorage
commonDelItem('name-del-btn', 'Name');
commonDelItem('email-del-btn', 'Email');
commonDelItem('message-del-btn', 'Message');

const send = () => {
    const oldInfo = localStorage.getItem('info');
    let oldValue = gettingInputValue('name');
    let oldEmail = gettingInputValue('email');
    let oldMessage = gettingInputValue('message');
    const object = {name: oldValue.value, email: oldEmail.value, message:     oldMessage.value};
    if(!oldInfo){
        localStorage.setItem('info', JSON.stringify(object));
    }
    else{
        const object = JSON.parse(localStorage.getItem('info'));
        oldValue.value = object?.name;
        oldEmail.value = object?.email;
        oldMessage.value = object?.message;
    }
}


//Reset Functionality
const resetAll = () => {
    localStorage.clear();
}