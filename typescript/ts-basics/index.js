// Using Interface as Prop Type, defining Type into
// the function return
function getTokenValue(userData) {
    var tokenResponse = {
        tokenValue: "".concat("TestandoToken" + userData.userName),
        tokenType: 'AccessToken',
        tokenDuration: 300
    };
    return tokenResponse;
}
// Creating a variable with interface
var newUser = {
    userId: 1,
    userName: "Victor Bittencourt"
};
var obtainedToken = getTokenValue(newUser);
console.log(obtainedToken);
