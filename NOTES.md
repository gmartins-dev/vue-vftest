# VF-apparel
## OVERVIEW
To build a simple single page application with Vue demonstrating a typical real world use
case; fetching data from an external source, generating some prescribed UI and some basic
state management.


## FUNCTIONAL REQUIREMENTS
1. The application should fetch a list of products from an external 3rd party api (details
below)
2. The main page layout, header, hero, product gallery, shopping cart should be
rendered as per the mockups (Quick View does not need to be implemented)
3. The product range should be orderable by;
a. Title - A to Z
b. Title - Z to A
c. Highest Price
d. Lowest Price
4. A shopping cart feature should be implemented that the user can add or remove products
to and from.
5. The shopping cart should keep a running total of the cost of all items within it.
6. The header should also reflect the current state of the shopping cart; the running total
and the number of items within it ( as per the mockups )


## NON FUNCTIONAL REQUIREMENTS
An example data source for products is https://efuktshirts.com/products.json (but any shopify
site /products.json will suffice). The json structure offers the products in many variants. You
do not need to display all variants for each product, taking the first variant for each product
will suffice.
There is only 1 image required for the header, the rest is just CSS. The image is included in the
tech task bundle (bg.jpg).
Please don’t get bogged down or spend too much time on initial setup, a suitable boilerplate
will suffice.
We would love to see your code written using the Composition API and Single File
Components.

### We’re interested in how you create the client side application with respect to;
● Data flow
● State management
● Application side effects (async data fetching)
● Application structure (with a view to scalability and reusability)




### Colors:

#9479FF → purple

#F5F3F6 → gray bg

#E6E4E7 → gray buttons

#333333 → gray fonts

#FFFFFF → white bgs
