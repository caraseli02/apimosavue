# Gridsome basic website example
##### WebSite demo: http://apimosa.es/

## Gridsome

Gridsome does some out-of-the-box magic for you, especially routing and resolving data. [The documentation](https://gridsome.org/docs/) explains the why and the what, so I'll only detail the things that are relevant for us:

- [Layouts](https://gridsome.org/docs/layouts/) (I use only one in this example) go in the `/layouts` folder. These are components that are automagically available globally.
- [Static pages](https://gridsome.org/docs/pages/) go in the `/pages` folder. These will get a URL based on the name (`/blog` will route to `/pages/Blog.vue`). The homepage is the exception, which points to the `/pages/Index.vue`. Pages are suited for data collections, such as the overviews of the Content we'll be creating.
- [Content nodes](https://gridsome.org/docs/templates/) (this is how Gridsome defines an item in a collection) will go in the `/templates` folder. Because we're passing some parameters, we need to connect the routes, params and templates in a `gridsome.config.js` file, which I'll explain in a bit.
- All [reusable components](https://gridsome.org/docs/components/) go (you guessed it) in the `/components` folder. Just like any Vue application!

````



