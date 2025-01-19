let form = document.querySelector('#authForm');

function checkAuth(){
    if(localStorage.getItem('userAuth')){

    }else{
        form.classList.remove('hidden');
    }
}