Link : https://www.youtube.com/watch?v=hkXzsB8D_mo&ab_channel=AmbientCoder

Overview :
GraphQl is a query language for APIs
It expose a single point as the entry point -> client defines the structure of the data that is required and server returns that data
POST and GET are supported in graphQL APIs

Eg : Client req. the collection of name and username fields  
{
Users : {
name,
username
}
}

Server resp :
{
"Users" : [
{name : "Siddhartha",username:"siddhartha" },
{name : "Yathartha",username:"yath" },
{name : "Annu",username:"annu" },
]
}

Good For :

- Save multiple round trips | Client can define exact data that is required and this will save then no. of trips the client will make to get the data | client can req. multiple nested levels of data from a resource in a single call
  eg : getting the orders and users can be done in a single call
- Avoid Versioning | as we make changes to our apis we might introduce breaking changes so to avoid that we will introduce versioning | in graphQL we don't do this as we can add new fields without breaking the existing quires, and similarly we can deprecate existing fields by doing log analysis of the usage of those fields
  REST and RPCs can usually return data that the client might not use | in graphQL client defines exactly what is needed resulted in payload sizes getting smaller

Not Good For :

- Added Complexities | Server needs to handle the complexities of the type of query the client consumes | this can get complex depending on the nature of the data
- Optimizing Performance in the backend of the query can be difficult when working with external users it becomes difficult to identify the use cases as they can vary quiet, this makes performance optimization at the backend quite a difficult challenge
- Too complicated for simple APIs

BEST : wen you needed a query flexibility
