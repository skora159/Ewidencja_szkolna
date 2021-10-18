const button = document.getElementById("button");
const studentsBtn = document.getElementById("students");
const teachersBtn = document.getElementById("teachers");
let id = 1;
let students = [];
let teachers = [];
let selectedPerson = 'students';

class Person {
    constructor(id, name, lastName) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
    }
}

class Student extends Person {
    constructor(id, name, lastName, numberClassSpeciality, averageGradeDegree) {
        super(id, name, lastName);
        this.numberClassSpeciality = numberClassSpeciality;
        this.averageGradeDegree = averageGradeDegree;
    }
}

class Teacher extends Person {
    constructor(id, name, lastName, numberClassSpeciality, averageGradeDegree) {
        super(id, name, lastName);
        this.numberClassSpeciality = numberClassSpeciality;
        this.averageGradeDegree = averageGradeDegree;
    }
}

function addPerson() {
    const name = document.getElementById("name").value;
    const lastName = document.getElementById("lastName").value;
    const numberClassSpeciality = document.getElementById("class").value;
    const averageGradeDegree = document.getElementById("averageGrade").value;

    if (selectedPerson === 'students') {
        const newStudent = new Student(id, name, lastName, numberClassSpeciality, averageGradeDegree);
        students.push(newStudent);
        console.log(students);
        displayStudent(newStudent);
    } else if (selectedPerson === 'teachers') {
        const newTeacher = new Teacher(id, name, lastName, numberClassSpeciality, averageGradeDegree);
        teachers.push(newTeacher);
        console.log(teachers);
        displayTeacher(newTeacher);
    }

};

function displayStudent(student) {
    const ol = document.getElementById("olStudents");
    const li = document.createElement("li");

    li.setAttribute("id", id);

    id = id + 1;

    li.innerText += student.name + " " + student.lastName + " " + student.numberClassSpeciality + " " + student.averageGradeDegree;

    li.setAttribute("onclick", "remove(this)");

    ol.appendChild(li);
}

function displayTeacher(teacher) {
    const ol = document.getElementById("olTeachers");
    const li = document.createElement("li");

    li.setAttribute("id", id);

    id = id + 1;

    li.innerText += teacher.name + " " + teacher.lastName + " " + teacher.numberClassSpeciality + " " + teacher.averageGradeDegree;

    li.setAttribute("onclick", "remove(this)");
    ol.appendChild(li);
}

function remove(studentLi) {

    let element = studentLi;
    element.remove();

    for (let i = 0; i < students.length; i++) {
        if (element.id == students[i].id) {

            students.splice(i, 1);
        }
    }
}

function clear() {
    const name = document.getElementById("name");
    const lastName = document.getElementById("lastName");
    const numberClassSpeciality = document.getElementById("class");
    const averageGradeDegree = document.getElementById("averageGrade");

    name.value = "";
    lastName.value = "";
    numberClassSpeciality.value = "";
    averageGradeDegree.value = " ";
};

function displayStudentsBtn() {
    let numberClassSpeciality = document.getElementById("speciality");
    let averageGradeDegree = document.getElementById("degree");

    numberClassSpeciality.innerText = "Klasa";
    averageGradeDegree.innerText = "Średnia ocen";


};

function displayTeachersBtn() {
    let numberClassSpeciality = document.getElementById("speciality");
    let averageGradeDegree = document.getElementById("degree");
    numberClassSpeciality.innerText = "Specjalność";
    averageGradeDegree.innerText = "Stopień naukowy";



};

function onClickButton(buttonType) {
    const olStudents = document.getElementById('olStudents');
    const olTeachers = document.getElementById('olTeachers');
    if (buttonType === 'students') {
        selectedPerson = buttonType;

        olTeachers.style.display = 'none';
        olStudents.style.display = 'block';

    } else if (buttonType === 'teachers') {
        selectedPerson = buttonType;

        olStudents.style.display = 'none';
        olTeachers.style.display = 'block';
    }


};


button.addEventListener("click", addPerson);
button.addEventListener("click", clear);
studentsBtn.addEventListener("click", displayStudentsBtn);
teachersBtn.addEventListener("click", displayTeachersBtn);