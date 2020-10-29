let students = []

const form = document.querySelector('#studentForm');
const input = document.querySelector('#name');
const btn = document.querySelector('#submit');
const studentList = document.querySelector('#students');
const date = new Date();
const checkbox = document.querySelector('input[type=checkbox]');

function enter(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
    }
}

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

function listStudents() {
    studentList.innerHTML = '';
    students.forEach(student => {
        let li = document.createElement('li');
        li.id = student.id;
        li.className = 'list-group-item d-flex justify-content-between';
        li.innerHTML =
            `
            <div class="pl-3">
            <input type="checkbox" class="form-check-input" id="attend" ${student.attending ? 'checked' : ''}>
            <label for="attend" class="form-check-label"></label>
        </div>
        ${student.name}
        <button class="btn btn-danger px-3 delete">X</button>
        `
        studentList.appendChild(li);
    })
    localStorage.setItem("students", JSON.stringify(students));
}

let old = JSON.parse(localStorage.getItem("students"));

if (old != null) {
    students = old;
}

listStudents();

input.addEventListener('keyup', enter);

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (validate('#name')) {


        // checkValidation('#yes', '#no');
        let student = {
            id: Date.now(),
            date: date,
            name: e.currentTarget.name.value,
            attending: false
        }
        students.push(student);
        listStudents();
        input.value = '';
    }
})

studentList.addEventListener('change', (e) => {
    let student = students.find(s => s.id.toString() === e.target.parentNode.parentNode.id);
    if (student) {
        student.attending = e.target.checked;
        listStudents();
    }
});

studentList.addEventListener('click', (e) => {

    const studentsCount = students.length
    students = students.filter(student => student.id != e.target.parentNode.id);
    if (studentsCount > students.length) {

        listStudents();
    }

})