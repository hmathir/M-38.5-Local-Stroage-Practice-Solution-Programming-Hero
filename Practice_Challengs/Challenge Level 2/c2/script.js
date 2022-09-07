
document.getElementById('btn').addEventListener('click', function(){
    const periviousValue = document.getElementById('initial-value');
    const innerText = periviousValue.innerText;
    let number = parseInt(innerText);
    number++;
    periviousValue.innerText = number;
    localStorage.setItem('InnerText', number);
})



const init = () => {
    const checkOld = localStorage.getItem('InnerText');
    if(checkOld){
        const periviousValue = document.getElementById('initial-value');
        periviousValue.innerText = localStorage.getItem('InnerText');
    }else{
        const periviousValue = document.getElementById('initial-value');
        const innerText = periviousValue.innerText;
        let number = parseInt(innerText);
    }
}
init();