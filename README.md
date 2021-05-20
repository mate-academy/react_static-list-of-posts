# React static list of posts
- Replace `<your_account>` with your Github username in the
  [DEMO LINK](https://leonid-vegera.github.io/react_static-list-of-posts/)
- Follow the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline)

## Task
- Implement an application with 5 components `PostList`, `Post`, `User`, `CommentList` and `Comment`
  displaying [posts.js](./src/api/posts.js), [users.js](./src/api/users.js) and [comments.js](./src/api/comments.js).
- Each post in the `PostList` is represented by a `Post` component. It should show:
  - the `title` of the post
  - the text (`body`) of the post
  - the `User` component showing the `name`, `email` and `address` of the author of the post
  - `CommentList` a sublist of the post comments.
    - Each `Comment` should show the `name`, `body` and `email`.
