# Product search

Estimated time: 8-12 hours (without Angular experience) 

The goal of the project is to create a product list viewer and gain some experience with angular. 
Mainly only components, the template engine, HTTP Client and reactiveX.
Angular is huge framework and for this project only a few fundamental features is needed. 
  
All data is loaded into the client from `products.json`. Meaning this project has no server part.

The project must be implemented using https://angular.io/.

**Those docs are useful**

1. https://angular.io/guide/architecture-components
1. https://angular.io/guide/setup-local
1. https://angular.io/guide/interpolation#template-expressions
1. https://angular.io/guide/pipes
1. https://angular.io/guide/http

**To do**

1. Clone this repo and create a branch with your name.
1. Initialize an angular project `ng new search` and create a component `ng g c product-search` and using the angular CLI
1. When done coding. Make sure you fulfil the requirements and make sure the project builds `ng build`.
1. Find a cool way to deliver the project


**Requirements**

1. The products must be listed in a user-friendly and elegant way. You can read a json file with `HttpClient get`
1. Pagination. Show, say 10, products per page. Hint: use `slice` pipe
1. Full text search. The user must be able to search for the products using full text. Input should be provided via a text input. Once a user starts typing the list of products should be filtered using full text search so he can easily find what he needs.
   1. This functionality must be done using https://www.learnrxjs.io/ which is included in angular. 
   1. Upon first search. Products should be loaded from products.json into the main memory. Subsequent search must not include this step. For this use the angular http client and read products.json which should be stored in the assets folder. This means no products are loaded nor shown before the first time the user starts typing.
   1. To relax the CPU the search must include debouncing. Meaning that nothing should happen unless the user has paused typing for at least, say 150 ms.
   1. The search should be freetext. The user should find "SRAM Power Pack PG-1050" by typing "Power SRAM". Test on this specific case.
   1. **Hint:** https://www.learnrxjs.io/learn-rxjs/recipes/type-ahead. However, you need to modify the pipe.


1.  Test your app functions correctly according to 3.ii by simulating a slow connection in Dev Tools -> Network -> Fast 3G.
    What happens if you type while `products.json` is loading.
   `exhaustMap` might help you solve any race condition issues. 
  
**Extra questions, for extra fun**
1. Which data structure makes this search fast, like almost constant time. Show example?
1. It's friday night. How much beer do you drink?

# Learning curve
Learning Angular is a great way to develop my skills in web development, and building projects is a way to put my knowledge into practice. I am going to build two application as part of my learning curve and those two would be in branches called e-commerce site and Tour of Heroes. I hope by building multiple projects can help me gain experience in different areas of angular og deepen my understanding of the framework. 

### e-commerce site
This tutorial introduces you to the essentials of Angular by walking you through building an e-commerce site with a catalog, shopping cart, and check-out form.
https://angular.io/start

### Tour of Heroes
This Tour of Heroes tutorial provides an introduction to the fundamentals of Angular and shows you how to:

1. Set up your local Angular development environment.
2. Use the Angular CLI to develop an application

The Tour of Heroes application that you build helps a staffing agency manage its stable of heroes. The application has many of the features that you'd expect to find in any data-driven application.
https://angular.io/tutorial/tour-of-heroes


