# React static list of posts

- Replace `<your_account>` with your Github username in the
  [DEMO LINK](AntonYegorov>.github.io/react_static-list-of-posts/)
- Follow the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline)

## The task
Implement an application with 5 components `PostList`, `PostInfo`, `UserInfo`,
`CommentList` and `CommentInfo` displaying posts with comments and user details.

1. Create a `preparedPosts` array in the App with each `post` having a link to
  a `user` and `comments` array. And pass it to the `PostList`.

1. The `PostInfo` accepts a `post` object (with `user` and `comments`
  properties added before) and renders a `title`, a `body`, a `UserInfo` and a
  `CommentList`.
   - Please, add `data-cy="post-title"`, and `data-cy="post-body"` attributes
   to `title` and `body` elements.
   - Please, add `data-cy="post-info"` to the main `div` of the component

1. The `UserInfo` accepts a `user` object and renders at least a `name` and an
  `email`.
   - Please, add `data-cy="user-name"` and `data-cy="user-email"` attributes
   to `name` and `email` elements.

1. The `CommentInfo` accepts a `comment` object and renders a `name`, a `body`, and an `email`.
   - Please, add `data-cy="comment-name"`, `data-cy="comment-body"`, and
   `data-cy="comment-email"` attributes to `name`, `body` and `email` elements.
