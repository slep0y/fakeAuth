let form = document.querySelector('#authForm'),
    content = document.querySelector('.content'),
    authButton = form.querySelector('#authButton'),
    regButton = form.querySelector('#regButton'),
    exitButton = document.querySelector('#exitButton'),
    loginName = form.querySelector('#loginName'),
    loginPass = form.querySelector('#loginPass');

function checkAuthData(){
    if(localStorage.getItem('authorize') && localStorage.getItem('userAuth')){
        let authName = localStorage.getItem('authorize'),
            usersBase = JSON.parse(localStorage.getItem('userAuth'));
        if(usersBase[authName]){
            content.classList.remove('hidden');
            form.classList.add('hidden');
            showMessage('Вы авторизованы как: ' + authName);
        }else{
            form.classList.remove('hidden');
            showMessage('Вы не авторизованы! Авторизуйтесь!');
        }
    }else{
        form.classList.remove('hidden');
        showMessage('Вы не авторизованы! Авторизуйтесь!');
    }
}

function authorize(e){
    e.preventDefault();
    let name = loginName.value,
        pass = loginPass.value;
    if(localStorage.getItem('userAuth')){
        let usersBase = JSON.parse(localStorage.getItem('userAuth'));
        if(usersBase[name] && pass == usersBase[name]['pass']){
            localStorage.setItem('authorize', name);
            checkAuthData();
        }else{
            showMessage('Неверные: Имя и Пароль');
        }
    }else{
        showMessage('Неверные: Имя и Пароль');
    }
}
function logout(e){
    e.preventDefault();
    localStorage.removeItem('authorize');
    showMessage('Вы вышли из профиля. Автризуйтесь!');
    content.classList.add('hidden');
    form.classList.remove('hidden');
}

function register(e){
    e.preventDefault();
    let name = loginName.value,
        pass = loginPass.value;
    if(name != '' && pass != ''){
        if(localStorage.getItem('userAuth')){
            let inBaseUserAuth = JSON.parse(localStorage.getItem('userAuth')),
                newUser = {
                    name: name,
                    pass: pass
                };
            inBaseUserAuth[name] = newUser;
            localStorage.setItem('userAuth', JSON.stringify(inBaseUserAuth));
            showMessage('Вы зарегистрированы! Авторизуйтесь!');
        }else{
            let newBaseUserAuth = {
                [name] : {
                    name: name,
                    pass: pass
                }
            };
            localStorage.setItem('userAuth', JSON.stringify(newBaseUserAuth));
            showMessage('Вы зарегистрированы! Авторизуйтесь!');
        }
    }
}

function showMessage(text){
    console.log(text);
}

checkAuthData();
authButton.onclick = authorize;
regButton.onclick = register;
exitButton.onclick = logout;