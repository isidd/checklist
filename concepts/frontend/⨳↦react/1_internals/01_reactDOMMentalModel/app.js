// This is my Virtual DOM (where I can declarative change the Virtual DOM to change my Real DOM  )

const markup = {
  type: "article",
  children: [
    {
      type: "h2",
      children: [
        {
          type: "text",
          value: "Counter",
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
};

const parentElement = document.getElementById("app");

function addElements(pojoElement, parentDomNode) {
  let newDOMNode =
    pojoElement.type === "text"
      ? document.createTextNode(pojoElement.value)
      : document.createElement(pojoElement.type);
  if (pojoElement.children) {
    pojoElement.children.forEach((child) => {
      addElements(child, newDOMNode);
    });
  }
  console.log(parentDomNode);
  parentDomNode.appendChild(newDOMNode);
}

addElements(markup, parentElement);
