# Product search

The goal of the project is to create a product list viewer and gain some experience with angular. All data is loaded into the client from `products.json`. Meaning this project has no server part.

The project must be implemented using https://angular.io/.

1. Clone this repo and create a branch with your name.
1. Initialize an angular project and create a component `ng g c product-search` and a service `ng g s product` using the angular CLI
1. When done coding. Make sure you fulfil the requirements and make sure the project builds `ng build`.
1. Create a pull request.


Requirements

1. The products must be listed in a user-friendly and elegant way
1. The profit of sellings a product must be listed. This can be calculcated using price and costprice. Please note, price includes VAT (25 %) while cost price does not.
If neither price or costprice is specified do not show anything.
1. Full text search. The user must be able to search for the products using full text. Input should be provided via a text input. Once a user starts typing the list of products should be filtered using full text search so he can easily find what he needs.
   1. This functionality must be done using https://www.learnrxjs.io/ which is included in angular.
   1. Upon first search. Products should be loaded from products.json into the main memory. Subsequent search must not include this step. For this use the angular http client and read products.json which should be stored in the assets folder. This means no products are loaded nor shown before the first time the user starts typing.
   1. To relax the CPU the search must include debouncing. Meaning that nothing should happen unless the user has paused typing for at least, say 150 ms.
   1. The search should be freetext. The user should find "SRAM Power Pack PG-1050" be typing "Power SRAM"
   1. For this use `switchMap`, `debounceTime`, `async pipe` or `subscribe`
1. The user must be able to sort the products. Decide for example two attributes the user can choose to sort on.
1. (Optional) Pagination. Fx show at most 10 products per page. What happens if the user paginates fast on a slow connection?


This is a take home project

