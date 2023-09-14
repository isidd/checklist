const User = require("./userSchema");

class UserController {
  constructor() {
    this.user = [{ id: 1, name: "Siddhartha", age: 30 }];
  }

  getUser(id) {
    return new Promise(async (resolve, reject) => {
      let user = this.user.find((user) => (user.id = id));
      let createUser = new User({ name: "Siddhartha", password: "12345" });
      await createUser.save();
      resolve({
        status: 200,
        data: user,
        message: "user fetched successfully",
      });
    });
  }
}

module.exports = new UserController();
