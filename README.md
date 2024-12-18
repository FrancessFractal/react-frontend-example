# Frontend example project

This is an example of a React-based frontend codebase using dummyjson.com as the api providing products to display.

## Setup and Running

First, ensure that you are using the correct version of node/npm.

```js
nvm use
```

Then install all necessary packages

```js
npm i
```

Finally, to run in development mode:
```js
npm run dev
```

Or, to generate a production build
```js 
npm run build
```

## Architecture and design decisions

### Application state

The application uses tanstack query to manage async/api data. Tanstack is configured to caches api responses to prevent unnecessary reloads of api data, for example when the user reuses the same search parameters they used previously. These tanstack-based hooks are organized in a state-hooks directory and is responsible for managing the api data within the application. Those hooks then make use of a more low-level api function that is responsible for the actual mechanics of making api calls.

Additionally, the application uses React Context to keep track of local application state. Using React Context instead of useState reduces the tendency to resort to prop drilling to get data into deeper components. But we also want to keep our application state somewhat organized, rather than having some unmanageable mega-state managing every minor piece of state throughout the application. So the application is organized into 'features' of closely related components interacting with state related to that feature. The scope of this exercise is quite small, so at present the there is only one feature.

The components don't interact directly with the state, but instead make changes through tanstack mutations. This creates consistency by giving us a uniform way to interact with application state, whether that state is client-side or server-side, whether the transaction is syncronous or asyncronous, whether we later on decide to migrate from React Context to some other state storage mechanism (to persist between sessions, for example), etc. The application isn't currently complex enough to have these sort of things, so at present it simply forwards the mutation value to the state.

### Known issues

There are problems when filtering, where sometimes no items are added to the page. For example, searching 'd' under the 'Beauty' category has empty search results with a 'Load More' button. Pressing the button 3 times will finally result in something showing. This is caused by the exercise's requirements needing features unsuppored by they dummyjson api. Specifically, dummyjson doesn't support server-side filtering, so we had to do it client side.

The exercise requirements included pagination, which is done server-side by dummyapi. However, since we are forced to do filtering client-side, there can be some pages in our pagination that don't actually have any relevant products, resulting in loading a page that doesn't render any new items.

I would generally advise against using client-side filtering on paginated data for this reason, and would recommend doing all pagination/filtering/etc either fully server-side or fully client-side (usually server-side for performance reasons). However, for this exercise, I thought it was important to demonstrate frontend management of server-side search results, so I didn't want to just move everything to frontend (even though the dataset is small enough for performance not to be a huge problem). So I chose to combine client-side filtering with server-side searching, resulting in some awkward UX when filtering.

