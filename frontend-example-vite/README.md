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

### Known issues

There are problems when filtering, where sometimes no items are added to the page. For example, searching 'd' under the 'Beauty' category has empty search results with a 'Load More' button. Pressing the button 3 times will finally result in something showing. This is caused by the exercise's requirements needing features unsuppored by they dummyjson api. Specifically, dummyjson doesn't support server-side filtering, so we had to do it client side.

The exercise requirements included pagination, which is done server-side by dummyapi. However, since we are forced to do filtering client-side, there can be some pages in our pagination that don't actually have any relevant products, resulting in loading a page that doesn't render any new items.

I would generally advise against using client-side filtering on paginated data for this reason, and would recommend doing all pagination/filtering/etc either fully server-side or fully client-side (usually server-side for performance reasons). However, for this exercise, I thought it was important to demonstrate frontend management of server-side search results, so I didn't want to just move everything to frontend (even though the dataset is small enough for performance not to be a huge problem). So I chose to combine client-side filtering with server-side searching, resulting in some awkward UX when filtering.

