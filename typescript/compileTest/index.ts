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

const student : UserInfo = {
    firstName: 'Victor',
    lastName: 'Bittencourt',
    gender: Gender.Masculino,
    age: 20,
    roleAtTime: 'Student'
}

console.log(student)