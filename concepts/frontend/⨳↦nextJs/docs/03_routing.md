Link : https://www.youtube.com/watch?v=e-3UPyuOCq0&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH&index=3&ab_channel=Codevolution

Overview :

    - Routing
        . file system based routing mechanism
        . when file is added to a pages folder it automatically becomes available as a route
        . by mixing and matching file names with a nested folder structure, it is possible to pretty much define the most common routing pattern
             . Route with pages
             . Nested Route
             . Dynamic Routes
             . Catch all routes
             . Navigate from the UI
             . Programmatically navigate between pages

- **_<!- Route with Pages ->_**

scenario 1.

```js
pages > index.js;
export default Home = () => {
  return <div>Home</div>;

  // this is going to be served @ localhost:3000 at the root of the application
  // index.js file within the pages folder will mapped to the root of our domain
};
```

scenario 2. | two routes /about & /profile

```js
pages>about.js;
export default About = ()=><div>About</div>

pages>about.js;
export default Profile = ()=><div>Profile</div>

```

- **_<!- Nested Routes ->_**

scenario 3. | /blog -> /blog/first -> /blog/second

```js
pages>blog>index.js;
export default Blog = ()=><div>Blog</div>

pages>blog>first.js;
export default FirstBlog = ()=><div>First Blog</div>

pages>blog>second.js;
export default SecondBlog = ()=><div>Second Blog</div>

```

- **_<!- Dynamic Routes ->_**

scenario 4. /products -> /products/id (id is dynamic)

```js
pages>products>index.js;
export default Products = ()=>(
    <div>
        <>Product 1</>
        <>Product 2</>
        <>Product 3</>
    </div>
)

pages>products>[productId].js;
export default ProductDetails = ()=>{
    const router = useRouter()
    const productId = router.query.productId
    return(
    <div>Details about the product {productId}</div>
    )
}
/*
    product/1 -> Details about the product 1
    product/2 -> Details about the product 2
    product/sweater -> Details about the product sweater
*/

/*
but if we have the sweater route then since it is more specific route it is going to map this route first with the specific file name
so -> when we hit /product/sweater -> next is first try to find sweater.js page only if that is not found it will render the dynamic productId page
*/
pages>products>sweater.js;
export default Sweater = ()=>{
    return(
    <div>Open Sweater Details</div>
    )
}
```

- **_<!- Nested Routes ->_**

scenario 5. /products -> /products/id/review/id

```js
/*
    productId.js file will be changes to [productId] folder and all the content of productId.js file will be moved to the index if [productId] folder's index file.
*/
pages > products > [productId] > index.js;

export default ProductDetails = () => {
  const router = useRouter();
  const productId = router.query.productId;
  return <div>Details about the product {productId}</div>;
};

pages > products > [productId] > review > [reviewId].js;
export default ProductDetails = () => {
  const router = useRouter();
  const {productId,reviewId} = router.query;
  return <div>Details about the product {productId} and reviewId {reviewId}</div>;
};

```

- **_<!- Catch All Routes ->_**
  Scenario 6.

      if we have
          - Feature 1
              Concept 1
              Concept 2
              Concept 3
              .
              .
              .
          - Feature 2
              Concept 1
              Concept 2
              Concept 3
              .
              .
          - Feature 3
          .
          .
          .

  20 Features x 20 Concepts -> 400 pages
  20 Features x 1 [conceptId] -> 20 pages
  1 [featureId] x 1 [conceptId] -> 1 page

  Every page will have same page Layout -> so we can define one file that can catch all the routes segment in the url with the help
  of [Catch_All_Routes] feature

```js
pages > docs > [...params].js;

export default Docs = ()=>{
    const router = useRouter()
    const {params = []} = router.query
    if(router.length === 2 ) return <> Viewing docs for feature {params[0]} and concept {concept[1]} </>
    if(router.length === 1 ) return <> Viewing docs for feature {params[0]} </>
    return <h1>Docs Home Page</h2>

}

/*
Catch All routes is a good use case for filtering a data
    If we do /docs in current scenario -> it will give us 404 not found page
To change this we can simply do [...params] -> [[params]]
In this case it will show = > Docs Home Page
*/

pages > docs > [[...params]].js;

export default Docs = ()=>{
    const router = useRouter()
    const {params = []} = router.query
    if(router.length === 2 ) return <> Viewing docs for feature {params[0]} and concept {concept[1]} </>
    if(router.length === 1 ) return <> Viewing docs for feature {params[0]} </>
    return <h1>Docs Home Page</h2>

}

```
