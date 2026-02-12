// Interface
interface User {
  name: string;
  age: number;
}

// Class
class UserManager {
  private users: User[] = [];

  addUser(user: User) {
    this.users.push(user);
    this.render();
  }

  render() {
    const list = document.getElementById("userList") as HTMLUListElement;
    list.innerHTML = "";

    this.users.forEach(u => {
      const li = document.createElement("li");
      li.textContent = `${u.name} - ${u.age}`;
      list.appendChild(li);
    });
  }
}

const manager = new UserManager();

// DOM Elements
const nameInput = document.getElementById("name") as HTMLInputElement;
const ageInput = document.getElementById("age") as HTMLInputElement;
const button = document.getElementById("addUser") as HTMLButtonElement;

// Event
button.addEventListener("click", () => {
  const user: User = {
    name: nameInput.value,
    age: Number(ageInput.value),
  };

  manager.addUser(user);

  nameInput.value = "";
  ageInput.value = "";
});
