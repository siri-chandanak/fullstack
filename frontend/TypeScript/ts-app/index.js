// Class
var UserManager = /** @class */ (function () {
    function UserManager() {
        this.users = [];
    }
    UserManager.prototype.addUser = function (user) {
        this.users.push(user);
        this.render();
    };
    UserManager.prototype.render = function () {
        var list = document.getElementById("userList");
        list.innerHTML = "";
        this.users.forEach(function (u) {
            var li = document.createElement("li");
            li.textContent = "".concat(u.name, " - ").concat(u.age);
            list.appendChild(li);
        });
    };
    return UserManager;
}());
var manager = new UserManager();
// DOM Elements
var nameInput = document.getElementById("name");
var ageInput = document.getElementById("age");
var button = document.getElementById("addUser");
// Event
button.addEventListener("click", function () {
    var user = {
        name: nameInput.value,
        age: Number(ageInput.value),
    };
    manager.addUser(user);
    nameInput.value = "";
    ageInput.value = "";
});
