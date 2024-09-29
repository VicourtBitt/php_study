// Using OR because ENUM has other uses than creating
// variable options, it serves to define static vars
// that probably can be used in configuration files
type Token = {
    tokenValue: string,
    // OR Operator
    tokenType: "AccessToken" | "RefreshToken",
    tokenDuration: number
}

type Cookie = {
    cookieValue: string
}

// Interfaces serves as Open-Types, they can be
// update at any moment. Types are closed by default
interface UserInfo {
    userId: number,
    userName: string,
}

// Using Interface as Prop Type, defining Type into
// the function return and using defensive programming
// to avoid null values inside the parameter
function getTokenValue (userData: UserInfo) : Token | string {
    if (!userData) return "No User Data has been provided"
    const tokenResponse: Token = {
        tokenValue: `${"TestandoToken" + userData.userName}`,
        tokenType: 'AccessToken',
        tokenDuration: 300
    } 
    return tokenResponse
}

// Creating a variable with interface
const newUser: UserInfo = {
    userId: 1,
    userName: "Victor Bittencourt"
} 

const obtainedToken = getTokenValue(newUser)
console.log(obtainedToken)