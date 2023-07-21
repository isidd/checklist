Link : https://www.youtube.com/watch?v=hkXzsB8D_mo&ab_channel=AmbientCoder

Overview :

Its a good request response model | so you request things it gives it to you
REST Apis are all about resources | https://example.com/api/v1/users
Operation -> Create.Read.Update.Delete
it uses http verbs :

- POST
- PUT
- PATCH
- GET
- DELETE
  it mostly return json or xml data
  It has resource/ sub-resource relationships
  https://example.com/api/v1/users
  https://example.com/api/v1/users/user1
  https://example.com/api/v1/users/user1/orders
  https://example.com/api/v1/users/user1/orders/order1

What about non CRUD operation ?

- if we want to archive a specific user -> PATCH users/user1 | BODY : {archived:true} | flag is used
- if we want to Deactivate a user -> PUT user/user1/deactivate | we make make use of sub-resource
- Search -> PUt search/code?name=bob | we use query parameters

Good For :

- standardized method names, arguments operation using http verbs
- utilizes http features very well
- easy to build and maintain

Not Good For :

- Big payloads -> it may give the entire entity but may be using a name | typically we get the entire resource back
- multiple http round trips -> if we want to get a resource and its sub resource we make 2 separate calls for resource and the for sub resource

BEST : for APIs that exposes CRUD like operation

there is no active connection to load the server with scalability
It provide us Headers
-> Headers are the meta data
Accept -> will tell the server where you need the data in specific format
Authorization -> can use to tell the server that we actually allow to make a request
body ->
status code :
2** -> everything is good
4** -> something messed up
5\*\* -> sever broken
