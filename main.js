const button = document.getElementById("button");
const studentsBtn = document.getElementById("students");
const teachersBtn = document.getElementById("teachers");
let id = 1;
let i = 1;

let students = [];
let teachers = [];
let removedStudents = []
class Person {
    constructor(id, name, lastName) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
    }
}

class Student extends Person {
    constructor(id, name, lastName, numberClass, averageGrade) {
        super(id, name, lastName);
        this.numberClass = numberClass;
        this.averageGrade = averageGrade;
    }
}

class Teacher extends Person {
    constructor(name, lastName, speciality, degree) {
        super(name, lastName);
        this.speciality = speciality;
        this.degree = degree;
    }
}
studentsBtn.addEventListener("click", function () {
    let speciality = document.getElementById("speciality");
    let degree = document.getElementById("degree");
    speciality.innerText = "Klasa";
    degree.innerText = "Średnia ocen";
    i = 1;
    console.log(i);

    students.forEach(displayStudent)

});

teachersBtn.addEventListener("click", function () {
    let speciality = document.getElementById("speciality");
    let degree = document.getElementById("degree");
    speciality.innerText = "Specjalność";
    degree.innerText = "Stopień naukowy";
    i = 2;
    console.log(i);


});



function addStudent() {
    const name = document.getElementById("name").value;
    const lastName = document.getElementById("lastName").value;
    const numberClass = document.getElementById("class").value;
    const averageGrade = document.getElementById("averageGrade").value;


    const newStudent = new Student(id, name, lastName, numberClass, averageGrade);
    students.push(newStudent);
    console.log(students);
    displayStudent(newStudent);

};

function displayStudent(student) {
    const ol = document.getElementById("ol");
    const li = document.createElement("li");


    li.setAttribute("id", id);
    id = id + 1;

    li.innerText += student.name + " " + student.lastName + " " + student.numberClass + " " + student.averageGrade;
    li.setAttribute("onclick", "remove(this)");
    ol.appendChild(li);

}

function remove(studentLi) {


    let element = studentLi;
    element.remove();

    console.log(element.id);

    let removeArrStud = students.filter(function (student) {
        return student.id == element.id;
    })
    removedStudents.push(removeArrStud);
    console.log(removedStudents);

}

function clear() {
    const name = document.getElementById("name");
    const lastName = document.getElementById("lastName");
    const numberClass = document.getElementById("class");
    const averageGrade = document.getElementById("averageGrade");

    name.value = "";
    lastName.value = "";
    numberClass.value = "";
    averageGrade.value = " ";
};


button.addEventListener("click", addStudent);
button.addEventListener("click", clear);