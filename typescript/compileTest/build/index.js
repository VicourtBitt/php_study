"use strict";
var Gender;
(function (Gender) {
    Gender["Masculino"] = "Masculino";
    Gender["Feminino"] = "Feminino";
    Gender["NaoBinario"] = "Nao-Binario";
})(Gender || (Gender = {}));
let studentList = [];
function createStudent(info) {
    if (!info) {
        return;
    }
    studentList.push(info);
}
createStudent({
    firstName: 'Victor',
    lastName: 'Bittencourt',
    gender: Gender.Masculino,
    age: 20,
    roleAtTime: 'Student'
});
createStudent({
    firstName: 'Gabriel',
    lastName: 'Mansolff',
    gender: Gender.Masculino,
    age: 18,
    roleAtTime: 'Student'
});
console.log(studentList);
