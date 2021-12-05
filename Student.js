let student = {
    fistName: "",
    lastName: "",
    grades: [],
    inputNewGrade(newGrade) {
        this.grades.push(newGrade);
    },
    computeAverageGrade() {        
        return  this.grades.reduce((sum,  current,  index,  array)  =>  sum  +  current  /  array.length,  0);

    }
}

let s1 = Object.create(student);
s1.fistName = "momona";
s1.lastName = "ebuy";
s1.grades = [];
s1.inputNewGrade(70);
s1.inputNewGrade(7);


let s2 = Object.create(student);
s2.fistName = "unni";
s2.lastName = "uki";
s2.grades = [];
s2.inputNewGrade(1000);
s2.inputNewGrade(0);
let multiples = [s1, s1];

let d = multiples.reduce((sum, current, index, array) => sum + current.computeAverageGrade() / array.length, 0);
const  result  = multiples.reduce((average,  stu,  index,  array)  =>  average  +  stu.computeAverageGrade()  /  array.length,  0);
console.log(result);

console.log(d);