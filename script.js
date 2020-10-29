let students = [
    {
        date: '2020-10-29',
        name: 'Frida Johansson',
        attending: false
    },
    {
        date: '2020-10-29',
        name: 'Klara Johansson',
        attending: false
    },
    {
        date: '2020-10-29',
        name: 'Arvid Johansson',
        attending: false
    },
]

const form = document.querySelector('#studentForm');
const input = document.querySelector('#name');
const btn = document.querySelector('#submit');
const studentList = document.querySelector('#students');
const check = document.querySelector('#attending');
const date = new Date();

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

const addStudent = () => {
    
}

function attending(check) {
    if (check.checked) {
        return true
    }
    else
        return false
}

function listStudents() {
    studentList.innerHTML='';
    students.forEach(student=>{
        let li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between';
        li.innerHTML =
            `
            <div class="pl-3">
            <input type="checkbox" class="form-check-input" id="attend">
            <label for="attend" class="form-check-label"></label>
        </div>
        ${student.name}
        <button class="btn btn-danger px-3">X</button>
        `
        studentList.appendChild(li);
    })
    localStorage.setItem("students", JSON.stringify(students));
}

let old = JSON.parse(localStorage.getItem("students"));

if(old !=null){
    students=old;
}

input.addEventListener('keyup', enter);

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (validate('#name')) {
      

        // checkValidation('#yes', '#no');
        let student = {
            date: date,
            name: e.currentTarget.name.value,
            attending: false
        }
        students.push(student);
        listStudents();
        input.value='';
    }
})

listStudents();