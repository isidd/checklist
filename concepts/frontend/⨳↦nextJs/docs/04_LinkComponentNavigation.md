Link : https://www.youtube.com/watch?v=sigcnKAPddM&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH&index=10&ab_channel=Codevolution

Overview :

- **_<!- Client Side Navigation : <Link /> ->_**

```js
pages > index.js;
import Link from "next/link";
export default Home = () => {
  return (
    <div>
      <h1> Home Page </h1>
      <Link href="/blog">
        <a> blog</a>
      </Link>
      <Link href="/products">
        <a> Products</a>
      </Link>
    </div>
  );
};
```

- **_<!- Navigation Programmatically ->_**
