const button = document.getElementById("button");
const studentsBtn = document.getElementById("students");
const teachersBtn = document.getElementById("teachers");
let id = 1;
let i = 2;
let students = [];
let teachers = [];

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

    if (i == 2) {
        const newStudent = new Student(id, name, lastName, numberClassSpeciality, averageGradeDegree);
        students.push(newStudent);
        console.log(students);
        displayStudent(newStudent);
    }

    if (i == 1) {
        const newTeacher = new Teacher(id, name, lastName, numberClassSpeciality, averageGradeDegree);
        teachers.push(newTeacher);
        console.log(teachers);
        displayTeacher(newTeacher);
    }
};

function displayStudent(student) {
    const ol = document.getElementById("ol");
    const li = document.createElement("li");

    li.setAttribute("id", id);

    id = id + 1;

    li.innerText += student.name + " " + student.lastName + " " + student.numberClassSpeciality + " " + student.averageGradeDegree;

    li.setAttribute("onclick", "remove(this)");

    ol.appendChild(li);
}

function displayTeacher(teacher) {
    const ol = document.getElementById("ol");
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

    if (i == 1) {
        // const right = document.getElementById("right");
        // const ol = document.createElement("ol");

        // right.appendChild(ol);
        // ol.setAttribute("id", "ol");
        // console.log(ol.id);



        for (let i = 0; i < students.length; i++) {
            // const ol = document.getElementById("ol");
            // const li = document.createElement("li");

            // li.innerText += students[i].name + " " + students[i].lastName + " " + students[i].numberClassSpeciality + " " + students[i].averageGradeDegree;
            // li.setAttribute("id", id);

            // id = id + 1;
            // li.setAttribute("onclick", "remove(this)");

            // ol.appendChild(li);

            // console.log(students[i].name + " " + students[i].lastName + " " + students[i].numberClassSpeciality + " " + students[i].averageGradeDegree);

        }
        console.log(students);
    }
    i = 2;
};

function displayTeachersBtn() {
    let numberClassSpeciality = document.getElementById("speciality");
    let averageGradeDegree = document.getElementById("degree");
    numberClassSpeciality.innerText = "Specjalność";
    averageGradeDegree.innerText = "Stopień naukowy";

    if (i == 2) {
        // const ol = document.getElementById("ol");
        // ol.remove();
        // const right = document.querySelector(".right");
        // right.appendChild(document.createElement("ol"));

        // ol.id = "ol";
        // console.log(ol.id);
    }
    for (let i = 0; i < teachers.length; i++) {
        // const ol = document.getElementById("ol");
        // const li = document.createElement("li");

        // li.innerText += teachers[i].name + " " + teachers[i].lastName + " " + teachers[i].numberClass + " " + teachers[i].averageGrade;
        // li.setAttribute("id", id);

        // id = id + 1;
        // li.setAttribute("onclick", "remove(this)");

        // ol.appendChild(li);

        // console.log(teachers[i].name + " " + teachers[i].lastName + " " + teachers[i].numberClass + " " + teachers[i].averageGrade);

    }
    console.log(teachers);

    i = 1;
};


button.addEventListener("click", addPerson);
button.addEventListener("click", clear);
studentsBtn.addEventListener("click", displayStudentsBtn);
teachersBtn.addEventListener("click", displayTeachersBtn);