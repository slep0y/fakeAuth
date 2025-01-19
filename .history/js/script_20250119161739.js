let form = document.querySelector('#authForm'),
    content = document.querySelector('.content'),
    authButton = form.querySelector('#authButton'),
    regButton = form.querySelector('#regButton'),
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

function register(e){
    e.preventDefault();
    let name = loginName.value,
        pass = loginPass.value;
    if(name != '' && pass != ''){
        let userAuth = {
            name: name,
            pass: pass
        };
        localStorage.setItem('userAuth', JSON.stringify(userAuth));
    }
}

function showError(){
    console.log('Неверные: Имя и Пароль');
}

checkAuthData();
authButton.onclick = authorize;
regButton.onclick = register;