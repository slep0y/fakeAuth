let form = document.querySelector('#authForm'),
    content = document.querySelector('.content'),
    authButton = form.querySelector('.button');

function checkAuthData(){
    if(localStorage.getItem('userAuth')){
        content.classList.remove('hidden');
    }else{
        form.classList.remove('hidden');
    }
}

function authorize(){

}

checkAuthData();