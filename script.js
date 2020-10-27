const form = document.querySelector('#studentForm');
const input = document.querySelector('#name');
const btn = document.querySelector('#submit');
const studentList = document.querySelector('#students');

input.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        form.submit();
    }
});


const validate = function (id) {
    const input = document.querySelector(id);
    const error = document.querySelector(id + '-error')
    if (input.value === '') {
        error.textContent = 'Please enter a valid input'
        error.classList.add('text-danger');
        input.classList.add('border-danger');
        input.focus();
        return false

    }
    else if (input.value.length < 2) {
        error.textContent = 'Please enter more than 2 characters';
        error.classList.add('text-danger');
        input.classList.add('border-danger');
        input.focus();
        return false
    }
    else {
        error.textContent = '';
        input.classList.remove('border-danger');
        return true
    }
}

const addStudent = function () {
    const newStudent = input.value;

    let li = document.createElement('li');

    li.className = 'list-group-item d-flex justify-content-between';
    li.innerHTML =
        `
        ${newStudent}
<div>
<div class="form-check form-check-inline">
    <input type="checkbox" class="form-check-input" id="yes">
    <label for="yes" class="form-check-label">Yes</label>
</div>
<div class="form-check form-check-inline">
    <input type="checkbox" class="form-check-input" id="no">
    <label for="no" class="form-check-label">No</label>
</div>
<div id="check-error"></div>
</div>
`
    // let check = document.createElement('input')
    studentList.appendChild(li);
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (validate('#name')) {
        addStudent();
    }
})