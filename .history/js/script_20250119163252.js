let form = document.querySelector('#authForm'),
    content = document.querySelector('.content'),
    authButton = form.querySelector('#authButton'),
    regButton = form.querySelector('#regButton'),
    loginName = form.querySelector('#loginName'),
    loginPass = form.querySelector('#loginPass');

function checkAuthData(){
    if(localStorage.getItem('authorize') && localStorage.getItem('userAuth')){
        let authName = localStorage.getItem('authorize'),
            regName = JSON.parse(localStorage.getItem('authorize'));
        if(authName == regName['name']){
            content.classList.remove('hidden');
        }else{
            form.classList.remove('hidden');
        }
    }else{
        form.classList.remove('hidden');
    }
}

function authorize(e){
    e.preventDefault();
    let name = loginName.value,
        pass = loginPass.value;
    if(localStorage.getItem('userAuth')){
        let userAuth = JSON.parse(localStorage.getItem('userAuth'));
        if(name == userAuth['name'] && pass == userAuth['pass']){
            localStorage.setItem('authorize', name);
        }
    }else{
        showMessage('Неверные: Имя и Пароль');
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
        showMessage('Вы зарегистрированы! Авторизуйтесь!');
    }
}

function showMessage(text){
    console.log(text);
}

// checkAuthData();
authButton.onclick = authorize;
regButton.onclick = register;