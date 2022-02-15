# Demo link 

https://joannaru.github.io/cats-rank/cats

# CatsRank

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.5.

This app uses **Observable** type to handle **asynchrous data**, counts casted votes and saves it on  JSON server  using HTTP request.

## Functionalities:

-   Dynamic list displaying with scrolling into newly loaded elements
-   Correct sorting of the list after changing votes
-   Saving data on JSON server
-   Animating Navbar

### The following Angular Platform features was used:

-   **Service** with @Injectable() decorator to handle data hosted independently and share it across components
-   **Asynchrous methods of HttpClient** to fetch data from JSON Server
-   **@Input** decorator in Child Component to recieve data from Parent Component
-   **@Output** decorator in Child Component to emit data for Parent Component
-   **@ViewChildren** decorator in order to get QueryList of elements from the view DOM
-   Angular's animation system to animate navbar
-   Router Module for links handling

### RxJS library was applied for reactive programming

-   Observable type has allowed to operate on asynchrous seqence of data

### JSON Server library

-   demo REST JSON service was created within this library

### Site is  **WCAG AA compliant**, checked with following tools:

-   [WebAIM](https://webaim.org/resources/contrastchecker/)  Contrast checker
-   [Wave Evaluation Tool](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh?hl=pl)
