// We can create new types with TS, it's
// called "CustomTypes". The CustomTypes
// can 'hold' predefined var's and their
// types too. Really useful for API's in
// general
type UserRegister = {
    cpf_cnpj: string
}

type Address = {
    street?: string,
    city?: string,
    state?: string,
    country?: string,
    postal_code?: string,
    userInfoId: number
}

type Email = {
    email?: string,
    userRegisterId: number
}

type PhoneNumber = {
    phone_number?: string
    userInfoId: number
}

type UserInfo = {
    first_name: string,
    last_name: string,
    gender: string,
    age: number,
    general_role: string
}

type JobExperiences = {
    role_at_time: string,
    average_payment: number,
    userRegisterId: number,
    companyRegisterId: number
}


