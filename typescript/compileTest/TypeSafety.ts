type InfoAddress = {
    street: string,
    city: string
}

type InfoEmail = {
    email: string
}

type Info = {
    name: string,
    age: number,
    address?: InfoAddress | "Brasil"
    userEmail?: InfoEmail | "Não cadastrado"
}

const userVictor : Info = {
    name: "Victor",
    age: 20,
    userEmail: {
        email: 'vicourt@proto.com'
    }
}

console.log(userVictor.address)

const user = "Victor"
let user2 = 'Victor'