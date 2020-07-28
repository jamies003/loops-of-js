let myStudents = [
  { firstName : 'Tom', grade : 77},
  { firstName : 'Ella', grade : 82},
  { firstName : 'Shae', grade : 90},
  { firstName : 'Phil', grade : 77},
];

let total = 0;

for (let i = 0; i < myStudents.length; i++) {
  let student = myStudents[i];
  total += student.grade;

  // console.log(`${student.firstName} scored ${students.grade}`);
}
console.log(total / myStudents.length);
// Gives the average grade for each students
