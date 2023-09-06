Link : https://www.youtube.com/watch?v=Cwko0caEC9w&list=PLIvjAQSG0vtz63oboMfR5hsOmgHVKV9e_&index=2&ab_channel=CodeWithNegi

Overview :

Axios : It is a Promise based http client for browser and node

- make HTTP request from browser and node server
- Intercept request and response
- transform request and response data
- Cancel request
- automatic transform to JSON data
- Automatic data object serialization to multipart/form-data and x-www-form-urlencoded body encodings
- Client side support for protecting against XSRF

  axios response:

  ```json
  {
    "config": {},
    "data": {},
    "headers": {},
    "request": {},
    "status": 200,
    "statusText": ""
  }
  ```

  **_<!- GET Request ->_**
  Make a request for a user with a given ID

```js
axios
  .get("/user?ID=12345")
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => {});

or;

axios
  .get("/user", {
    params: {
      ID: 12345,
    },
  })
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => {});

<!-- async await type -->

async function getUser() {
  try { const response = await axios.get('/user?ID=12345'); }
  catch (error) { console.error(error); }

}
```

**_<!- POST Request ->_**
Make a request POST request with payload

```js
axios
  .post("/user", {
    firstName: "Fred",
    lastName: "Flintstone",
  })
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
```

**_<!- Performing multiple concurrent requests ->_**

```js
const getUserAccount = ()=> return axios.get("/user/12345");
const getUserPermissions = ()=> axios.get("/user/12345/permissions");

Promise.all([getUserAccount(), getUserPermissions()]).then(function (results) {
  const acct = results[0];
  const perm = results[1];
});
```

**_<!- GET request for remote image in node.js ->_**

```js
[node.js];
axios({
  method: "get",
  url: "https://bit.ly/2mTM3nY",
  responseType: "stream",
}).then(function (response) {
  response.data.pipe(fs.createWriteStream("ada_lovelace.jpg"));
});
```
