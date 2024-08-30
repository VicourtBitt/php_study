"use strict";
var Gender;
(function (Gender) {
    Gender["Masculino"] = "Masculino";
    Gender["Feminino"] = "Feminino";
    Gender["NaoBinario"] = "Nao-Binario";
})(Gender || (Gender = {}));
const student = {
    firstName: 'Victor',
    lastName: 'Bittencourt',
    gender: Gender.Masculino,
    age: 20,
    roleAtTime: 'Student'
};
console.log(student);
