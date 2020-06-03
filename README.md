#Instruction how to start app
When the repository has been cloned from the Github the following

- NPM install
- NPM run start

# This is a dashboard that shows two parts.

- Random meal
- Search Input that shows buttons and when someone types in the input field it will only show the matching buttons.

#Architectural decisions

#Why React

- React because of my experience with this library it makes me more productive, which is business-wise a profitable choice.
- Backed by Facebook, so the community behind this library is huge which makes it easier for Developer to solve their problem and in the end more productive.
- Components that can be reused multiple times
- Virtual DOM, so only the part that has changed will only be rerendered. Which garantees better user experience and higher app performance.
- Size of this Singe Page application is smaller than Angular
- To understand React it is necessarily to have a deeper understanding of vanilla JavaScript. So it stimulates Developers to understand what really happens under the hood.
- In comparison to Angular the learning curve of React is not that steep.

#Why Redux

- Using Redux makes it easier for Developer to follow the state of the application
- Also the documentation of Redux is absolutely amazing and the community behind this library. 

#Lodash

- To check if the objects are empty. 

#how to get App production ready

- run the test first to check if everything works properly with - npm run test (if all tests passed then it is ready to go to for the next step below)
- npm run build

## Random meal api

Fetch the api and then create a button that will call this api call.
When the api has been called, the component should cluster all the matching and exisiting key names with values and output that. In my perspective this part must be a reusable component so we can use this again for the second part of this app.

## Search api
First of all we need to fetch an api.
Then we must get input value which outputs a bunch of ingredients.
Each ingredient should be clickable.

#Writing tests
When each component has been written in a maintainable and reusable way, then the next step is to write a test in Jest and with React Testing Library. 
