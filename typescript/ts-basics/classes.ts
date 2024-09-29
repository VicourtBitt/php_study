interface UserResponse {
    id: number,
    cpf_cnpj?: string
}

interface UserInfoResponse {
    id: number,
    userName?: string,
    userGender?: "M" | "F" | "O",
    userAge?: number,
    userRegisterId: UserResponse['id']
}

interface CredentialsResponse {
    id: number,
    email: string,
    password?: string
    userRegisterId: UserResponse['id']
}

class CustomError {
    private message: string

    constructor (message: string) {
        this.message = message
    }

    public getError () : string {
        return this.message
    }
}

class UserRequisitions {
    private user: UserInfoResponse
    private credentials: CredentialsResponse

    constructor (user: UserInfoResponse, credentials: CredentialsResponse) {
        this.user = user
        this.credentials = credentials
    }

    public getUserData () : UserInfoResponse{
        return this.user
    }

    public getCredentials () : CredentialsResponse {
        return this.credentials
    }
}

const User = new UserRequisitions(
    {
        id: 1,
        userName: "Victor Bittencourt",
        userGender: "M",
        userAge: 20,
        userRegisterId: 1
    },
    {
        id: 1,
        email: "victor@proto.com",
        password: "123456",
        userRegisterId: 1
    }
)

console.log(User.getUserData())