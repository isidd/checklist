---->>>>> React <<<<<<--- :

It is a open source FE-Javascript library that is used to build |composable| user interfaces for SPAs.
React is simply the other peoples Imperative Javascript code | that will let us write the web application in declarative way -> It lets us focus on WHAT the app is suppose to do rather then HOW the app is going to update a DOM

"========================================================================================================================="

---->>>>> (Composable Component) <<<<<<--- :

Component composition is the name for passing components as props to other components, thus creating new components with other components.

<ProductCard
image={product.img}
title={product.title}
category={product.category}
rating={product.rating}
price={product.price}
addToCart={product.addToCart}>

Sometimes we need to hide some of the information we pass from component as props
the way to do it is using flags : showTitle, showRating

<ProductCard
image={product.img}
title={product.title}
category={product.category}
rating={product.rating}
price={product.price}
addToCart={product.addToCart}
showTitle = {false}
showRating={false}>

But this is hard to manage the component as the list of props will grow to accommodate the use cases
and we need to keep changing the Product code to simply extend it.
For this issue we can use the Composable & Compound Components

Link: https://www.youtube.com/watch?v=vPRdY87_SH0

<ProductCard
product={product}
image={
<ProductCard.Image />
}
info={
<ProductCard.Info>
<ProductCard.Category />
<ProductCard.Title />
<ProductCard.Rating />
<ProductCard.Price />
</ProductCard.Info>
}
action={
<ProductCard.Button onClick={addToCart}>Add to cart</ProductCard.Button>
}
/>

"========================================================================================================================="

---->>>>> (features of React?) <<<<<<--- :

- JSX : syntax extension of JS that allows developers to write HTML in their JS code
  instead of writing react.createElement()

- Virtual DOM : It is a Javascript Object which has the tree mapping of the actual DOM nodes.
  So in a way React has the copy of the actual DOM but it is represented as Javascript Object.
  So instead of doing DOM manipulation directly we make changes on the Virtual DOm and then React decide
  how to make those changes in the actual DOM in a performant way.
  loc: /concepts/frontend/react/reactDOMMentalModel/app.js (Virtual DOM)

- Supports both SSR & CSR
  loc: D:\Practice\concepts\frontend\rendering

- Unidirectional or one-way data flow or data binding :
  you always know where the value is coming from and what can and can't set it.

- Uses reusable/composable/compound UI components to develop the view.

- the
