let form = document.querySelector('#authForm'),
    content = document.querySelector('.content');

function checkAuth(){
    if(localStorage.getItem('userAuth')){
        content.classList.remove('hidden');
    }else{
        form.classList.remove('hidden');
    }
}



checkAuth();