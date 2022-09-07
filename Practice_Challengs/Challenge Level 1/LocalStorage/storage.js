// Setting Normal Value
document.getElementById('btn').addEventListener('click', function(){
   localStorage.setItem('age', '40');
})


// Getting Normal Value 
document.getElementById('getLocalStorage').addEventListener('click', function(){
    const gettingValue = localStorage.getItem('age');
    alert(parseInt(gettingValue));
})

//Remove Name From Local Storage
document.getElementById('remove-name-btn').addEventListener('click', function(){
    const checkOld = localStorage.getItem('name');
    if(checkOld){
        localStorage.removeItem('name');
    }
    else{
        alert('No Data Found');
    }

})

//Remove Age From Local Storage
document.getElementById('remove-age-btn').addEventListener('click', function(){
    const checkOld = localStorage.getItem('age');
    if(checkOld){
        localStorage.removeItem('age');
    }
    else{
        alert('No Data Found');
    }

})


//Set Object On Local Storage
document.getElementById('object-btn').addEventListener('click', function(){
    const value = {firstName: 'Abraham', lastName: 'Linkon'};
    localStorage.setItem('object', JSON.stringify(value));
})