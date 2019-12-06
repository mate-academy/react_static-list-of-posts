# React static list of posts

## Demo link
Add link here: `[DEMO LINK](https://<your_account>.github.io/react_static-list-of-posts/)`

## Task
- Implement an application with 5 components `PostList`, `Post`, `User`, `CommentList` and `Comment`
  displaying [posts.js](./src/api/posts.js), [users.js](./src/api/users.js) and [comments.js](./src/api/comments.js).
- Each post in `PostList` is represented by a `Post` component. It should show:
  - the `title` of the post
  - the text (`body`) of the post
  - the `User` component showing the `name`, `email` and `address` of the author of the post
  - `CommentList` a sublist of the post comments.
    - Each `Comment` should show the `name`, `body` and `email`.

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
  - `[DEMO LINK](https://vvxforce.github.io/react_static-list-of posts/)` - this will be a
  link to your index.html
- Commit and push all recent changes.
- Create `Pull Request` from forked repo `(<branch_name>)` to original repo
(`master`).
- Add a link at `PR` to Google Spreadsheets.

## Project structure
- `src/` - directory for css, js, image, fonts files
- `build/` - directory for built pages

You should be writing code in `src/` directory.
