# React static list of posts
- Replace `<your_account>` with your Github username in the
  [DEMO LINK](https://<your_account>.github.io/react_static-list-of-posts/)
- Follow the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline)

## The task
Implement an application with 5 components `PostList`, `PostInfo`, `UserInfo`, 
`CommentList` and `CommentInfo` displaying posts with comments and user details.

- Create a `preparedPosts` array in the App with each `post` having a link to a
  `user` and `comments` array. And pass it to the `PostList`
- The `PostInfo` accepts a `post` object (with `user` and `comments` 
  properties added before) and renders a `title`, a `body`, a `UserInfo` and a
  `CommentList`
- The `UserInfo` accepts a `user` object and renders at least a `name` and an
  `email`
- The `CommentInfo` should show a `name`, a `body` and an `email`
