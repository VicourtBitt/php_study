type UserDetails = {
    id: number,
    name: string
}

const detailsList : Array<UserDetails> = []

function gatherSpecificUser (id: number): UserDetails {
    const user = detailsList.find(user => user.id === id)
    if (!user) {
        throw new Error("No users has been found")
    }
    return user
}