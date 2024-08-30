// We can create new types with TS, it's
// called "CustomTypes". The CustomTypes
// can 'hold' predefined var's and their
// types too. Really useful for API's in
// general
type Address = {
    id: number,
    street?: string,
    city?: string,
    state?: string,
    country?: string,
    postal_code?: string,
    userInfoId: number
}

type Email = {
    id: number,
    email?: string,
    userRegisterId: number
}

type PhoneNumber = {
    id: number,
    phone_number?: string
    userInfoId: number
}

type UserInfo = {
    id: number,
    first_name: string,
    last_name: string,
    gender: string,
    age: number,
    general_role: string
}

type JobExperiences = {
    id: number,
    role_at_time: string,
    average_payment: number,
    userRegisterId: number,
    companyRegisterId: number
}


