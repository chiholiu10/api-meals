#Instruction how to start app
When the repository has been cloned from the Github the following
- NPM install
- NPM run start
- NPM run test

# This is a dashboard that shows two parts.
- Random meal
- Search Input that shows buttons and when someone types in the input field it will only show the matching buttons.

##Architectural decisions
##Why React
- React because of my experience with this library it makes me more productive, which is business-wise a profitable choice.
- Backed by Facebook, so the community behind this library is huge which makes it easier for Developer to solve their problem and in the end more productive.
- Components that can be reused multiple times
- Virtual DOM, so only the part that has changed will only be rerendered. Which garantees better user experience and higher app performance. 
- Size of this Singe Page application is smaller than Angular
- To understand React it is necessarily to have a deeper understanding of vanilla JavaScript. So it stimulates Developers to understand what really happens under the hood. 
- In comparison to Angular the learning curve of React is not that steep. 

##Why Redux 
- Using Redux makes it easier for Developer to follow the state of the application

##Why styled-component
- Easier to delete part of CSS, since it is tied to every component. 

##How to get App production ready
- npm run build

## Random meal api

Fetch the api and then create a button that will call this api call.
When the api has been called, the component should cluster all the matching and exisiting key names with values and output that. In my perspective this part must be a reusable component so we can use this again for the second part of this app. 

## Search api

First of all we need to fetch an api.
Then we must get input value which outputs a bunch of ingredients.
Each ingredient should be clickable.

#Writing tests
When each component has been written in a maintainable and reusable way, then the next step is to write a test in Jest

Todo-list
* ListRandomMeals test
* App.test.js
* Styling compnents
* Write ReadMe
* Check if app is working 
* Prettier to make code more readable