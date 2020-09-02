# projectsearch

The goal of the project is to create a project list viewer and gain some experience with angular and reactiveX.

The project must be implemented using https://angular.io/. The products can be found in products.json.

1. Clone this repo and create a branch with your name.
1. Initialize an angular project and create a component `ng g c product.search` and service `ng g s product.service` using the angular CLI
1. When done coding. Make sure you fulfil the requirements and make sure the project builds `ng build`.
1. Create a pull request.


Requirements

1. Full text search. The user must be able to search for the products using full text. Input should be provided via a text input. Once a user starts typing the list of products should be filtered using full text search so he can easily find what he needs.
   1. This functionality must be done using https://www.learnrxjs.io/ which is a main part of the angular.io package.
   1. Upon first search. Products should be loaded from products.json into the main memory. Subsequent search must not include this step. For this use the angular http client and read project.json from the assets folder. This means no products are shown before the user starts typing.
   1. To relax the CPU the search must include  debouncing. Meaning that nothing should happen unless the user has paused typing for at least, say 150 ms.
   1. For this use `switchMap`, `debounceTime`, `async pipe` or `subscribe`
1. Pagination. Fx show at most 10 products per page. What happens if the user paginates fast on a slow connection?
1. (Optional) The user must be able to sort the products. Decide for example two attributes to sort on.


This is a take home project

