[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/_m20mJOE)
# NodeJS - EJS Exercise

**Goal:** Create and serve a frontend website using Express and EJS.

## Instructions

1. Install the necessary packages for your server:
    - `npm install -D @types/node @types/express`
    - `npm install express dotenv ejs`
2. Create your server file inside the `src/server.ts` and configure your express and EJS.
3. Create a directory called `routes` for your server routes.
4. Create a directory called `views` for your EJS files.
5. Set the view engine in your `server.ts` to 'EJS'.

    ```js
    app.set('view engine', 'ejs')
    app.set('views', path.join(__dirname, '../src/views'))
    ```

6. Create 3 routes and EJS pages for:
    - Home (`/`)
    - About (`/about`)
    - Contact (`/contact`)
7. Add some placeholder/dummy content for each of the pages.
8. Create a `partials` directory inside your `views` directory. Create a partial file called `header.ejs` and add your site navigation there. Create a partial file called `footer.ejs` and add include copyright text.
9. In your 3 main pages, call and include the `header.ejs` and `footer.ejs` partial files.
10. Test your 3 routes and make sure they are all rendering properly.

### Custom CSS

1. Create a directory called `public` inside the `dist` directory.
2. Create a CSS file `style.css` inside the `public` directory.
3. In your `server.ts`, add a middleware so that the server knows where to load static files such as CSS and JS. Make sure to import the *path* module first: `import path from 'path'`.

    ```js
    app.use(express.static(path.join(__dirname, 'public')))
    ```

4. In your `header.ejs`, add a link tag to point to the CSS file you created:

    ```html
    <link rel="stylesheet" href="/css/style.css">
    ```

5. Customize your website by adding some styling.
