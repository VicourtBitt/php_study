var UserRequisitions = /** @class */ (function () {
    function UserRequisitions(user, credentials) {
        this.user = user;
        this.credentials = credentials;
    }
    UserRequisitions.prototype.getUserData = function () {
        return this.user;
    };
    UserRequisitions.prototype.getCredentials = function () {
        return this.credentials;
    };
    return UserRequisitions;
}());
var User = new UserRequisitions({
    id: 1,
    userName: "Victor Bittencourt",
    userGender: "M",
    userAge: 20,
    userRegisterId: 1
}, {
    id: 1,
    email: "victor@proto.com",
    password: "123456",
    userRegisterId: 1
});
console.log(User.getUserData());
