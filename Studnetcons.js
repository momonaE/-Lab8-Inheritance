function Student(fistName, lastName, grades = []) {
    this.fistName = fistName;
    this.lastName = lastName;
    this.grades = grades;
}
Student.prototype.inputNewGrade = function(newGrade) {
    this.grades.push(newGrade);
}

Student.prototype.computeAverageGrade = function() {        
    return  this.grades.reduce((sum,  current,  index,  array)  =>  sum  +  current  /  array.length,  0);

}

let s1 = new Student("momona", "ebuy");

s1.inputNewGrade(70);
s1.inputNewGrade(7);

let s2 = new Student('unni', 'uki');


s2.inputNewGrade(1000);
s2.inputNewGrade(0);
let multiples = [s1, s1];

let d = multiples.reduce((sum, current, index, array) => sum + current.computeAverageGrade() / array.length, 0);
const  result  = multiples.reduce((average,  stu,  index,  array)  =>  average  +  stu.computeAverageGrade()  /  array.length,  0);
console.log(result);

console.log(d);