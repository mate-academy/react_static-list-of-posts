# React static list of posts
- [DEMO LINK](https://MaximZhuravlov.github.io/react_static-list-of-posts/)

## Task
- Implement an application with 5 components `PostList`, `Post`, `User`, `CommentList` and `Comment`
  displaying [posts.js](./src/api/posts.js), [users.js](./src/api/users.js) and [comments.js](./src/api/comments.js).
- Each post in the `PostList` is represented by a `Post` component. It should show:
  - the `title` of the post
  - the text (`body`) of the post
  - the `User` component showing the `name`, `email` and `address` of the author of the post
  - `CommentList` a sublist of the post comments.
    - Each `Comment` should show the `name`, `body` and `email`.
