class UserController {
  constructor() {}

  async userRegistration(userData) {
    let userReg = new Promise(async (resolve, reject) => {
      try {
        console.log("here at registration");
        // call database
        resolve({
          status: 200,
          data: {
            user: "Siddhartha",
          },
          message: "User Successfully Registered..!",
        });
      } catch (err) {
        console.log(err);
        reject({
          status: 409,
          message: "Unable to save data to the Db",
        });
      }
    });
    return userReg;
  }
}

module.exports = new UserController();
