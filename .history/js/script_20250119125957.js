let form = document.querySelector('#authForm'),
    content = document.querySelector('.content');

function checkAuthData(){
    if(localStorage.getItem('userAuth')){
        content.classList.remove('hidden');
    }else{
        form.classList.remove('hidden');
    }
}



checkAuthData();