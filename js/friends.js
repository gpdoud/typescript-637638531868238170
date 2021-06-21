"use strict";
var Friend = /** @class */ (function () {
    function Friend(name, age, email, bff) {
        if (bff === void 0) { bff = false; }
        this.name = name;
        this.age = age;
        this.email = email;
        this.bff = bff;
    }
    Friend.prototype.print = function () {
        console.log(this.name, "|", this.age, "|", this.email, "|", this.bff);
    };
    return Friend;
}());
var friends = [
    new Friend("Alice", 29, "alice@friend.com", true),
    new Friend("Bill", 31, "bill@friend.com", false),
    new Friend("Carol", 35, "carol@friend.com", false),
    new Friend("Daniel", 27, "daniel@friend.com", true),
    new Friend("Erin", 33, "erin@friend.com", false)
];
for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
    var f = friends_1[_i];
    f.print();
}
