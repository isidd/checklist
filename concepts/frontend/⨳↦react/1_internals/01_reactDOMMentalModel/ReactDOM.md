**_React Virtual DOM and Concepts_ :_**
    How can we form a Javascript Object or set of Javascript object that define the HTML element or Node ? 
    It should map : 
        - type of HTML element (html tag or text) in case of text it should have value
        - children [] ; 

```html
        <article>
            <h1>Vardan</h1>
            <p>
                Count
                <strong>
                    <em> 1 </em>
                </strong>
                times
            </p>
            <button>Click me</button>
            <marquee>Counter</marquee>
        </article>
```

```js 
const markup = {
  type: "article",
  children: [
    {
      type: "h1",
      children: [
        {
          type: "text",
          value: "Vardan",
        },
      ],
    },
    {
      type: "p",
      children: [
        {
          type: "text",
          value: "Count",
        },
        {
          type: "strong",
          children: [
            {
              type: "em",
              children: [
                {
                  type: "text",
                  value: " 1 ",
                },
              ],
            },
          ],
        },
        {
          type: "text",
          value: "times",
        },
      ],
    },
    {
      type: "button",
      children: [
        {
          type: "text",
          value: "Click me",
        },
      ],
    },
    {
      type: "marquee",
      children: [
        {
          type: "text",
          value: "Counter",
        },
      ],
    },
  ],
}
```
This is the our own version DOM we might call it Virtual DOM.
 