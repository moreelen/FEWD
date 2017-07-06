var arr1 = [1, "JavaScript", false, []];
var students = ["Rosa", "Ali", "James", "Marine", "Luke", "Mia", "Virginia"];

alert(students[1]);

function sayHelloToStudents(){
  for (var i = 0; i < students.length; i++){
    console.log("Hello " + students[i] + " index " + i);
  }
}

function addStudentToClassroom(){
  var studentName = prompt("What is the student name?");
  students.push(studentName);
}

while(students.length < 10){
  addStudentToClassroom();
  sayHelloToStudents();
}

alert("class is too big");