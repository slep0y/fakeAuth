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
    if(localStorage.getItem('userAuth')){
        let userAuth = JSON.parse(localStorage.getItem('userAuth'));
    }else{
        showError();
    }
}

function register(){

}

function showError(){
    console.log('Неверные: Имя и Пароль');
}

checkAuthData();
authButton.onclick = authorize;