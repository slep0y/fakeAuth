let form = document.querySelector('#authForm'),
    content = document.querySelector('.content'),
    authButton = form.querySelector('#authButton'),
    loginName = form.querySelector('#loginName'),
    loginPass = form.querySelector('#loginPass');

function checkAuthData(){
    if(localStorage.getItem('userAuth')){
        content.classList.remove('hidden');
    }else{
        form.classList.remove('hidden');
    }
}

function authorize(e){
    e.preventDefault();
}

checkAuthData();
authButton.onclick = authorize;