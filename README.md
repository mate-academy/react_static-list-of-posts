# React static list of posts

## Demo link

Add link here: `[DEMO LINK](https://Igorskiy.github.io/react_static-list-of-posts/)`


## Task

By using [posts.js](./src/api/posts.js), [users.js](./src/api/users.js), and [comments.js](./src/api/comments.js) as modules to your React application, create and display a list of posts with the following data on each:

1) the title of the post;
2) the text (body) of the post;
3) the name, email, and address of the author of the post;
4) sublist of the post comments, including the name and email of the author of each comment as well as the comment itself.

Create and use five components: `PostList`, `Post`, `User`, `CommentList`, and `Comment`. You can use the `User` component from both `Post` (with address) and `Comment` (without providing any address).


## Workflow

- Fork the repository with task
- Clone forked repository
    ```bash
    git clone git@github.com:<user_name>/<task_repository>.git
    ```
- Run `npm install` to install dependencies.
- Then develop


## Development mode

- Run `npm start` to start development server on `http://localhost:3000`
    When you run server the command line window will no longer be available for
    writing commands until you stop server (`ctrl + c`). All other commands you
    need to run in new command line window.
- Follow [HTML, CSS styleguide](https://mate-academy.github.io/style-guides/htmlcss.html)
- Follow [the simplified JS styleguide](https://mate-academy.github.io/style-guides/javascript-standard-modified)
- run `npm run lint` to check code style
- When you finished add correct `homepage` to `package.json` and run `npm run deploy`
- Add links to your demo in readme.md.
  - `[DEMO LINK](https://<your_account>.github.io/<repo_name>/)` - this will be a
  link to your index.html
- Commit and push all recent changes.
- Create `Pull Request` from forked repo `(<branch_name>)` to original repo
(`master`).
- Add a link at `PR` to Google Spreadsheets.


## Project structure

- `src/` - directory for css, js, image, fonts files
- `build/` - directory for built pages

You should be writing code in `src/` directory.
