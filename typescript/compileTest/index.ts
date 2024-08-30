enum Gender {
    Masculino = 'Masculino',
    Feminino = 'Feminino',
    NaoBinario = 'Nao-Binario'
}

type UserInfo = {
    firstName?: string,
    lastName?: string,
    gender?: Gender,
    age?: number,
    roleAtTime?: string
}

let studentList : Array<UserInfo>= []

function createStudent(info: UserInfo) {
    if (!info) {
        return
    }
    studentList.push(info)
} 

createStudent({
    firstName: 'Victor',
    lastName: 'Bittencourt',
    gender: Gender.Masculino,
    age: 20,
    roleAtTime: 'Student'
})

createStudent({
    firstName: 'Gabriel',
    lastName: 'Mansolff',
    gender: Gender.Masculino,
    age: 18,
    roleAtTime: 'Student'
})

console.log(studentList)