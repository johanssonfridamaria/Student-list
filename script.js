const form = document.querySelector('#studentForm');
const inputName = document.querySelector('#name');
const btn = document.querySelector('#submit');

inputName.addEventListener('keyup', enter(e));

function enter(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        form.submit();
    }
}


function addStudent() {

}

form.addEventListener('submit', function(e){
e.preventDefault();

})