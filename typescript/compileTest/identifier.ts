type People = {
    id: number,
    name: string
}

const PeoplesList : Array<People> = [
    { id: 1, name: 'Victor'},
    { id: 2, name: 'Marcos'},
    { id: 3, name: 'André'},
    { id: 4, name: 'Gabriel'},
]

export function searchObj (identifier: string | number) {
    if (typeof identifier === 'string') {
        return PeoplesList.filter((elem) => elem.name === identifier)
    } else if (typeof identifier === 'number') {
        return PeoplesList.filter((elem) => elem.id === identifier)
    } else {
        throw new TypeError('The parameter should be an "string" or "number"')
    }
}