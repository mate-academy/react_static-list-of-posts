# React static list of posts
- [DEMO LINK](https://andr1yk.github.io/react_static-list-of-posts/)
- Follow the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline)

## The task
Implement an application with 5 components `PostList`, `PostInfo`, `UserInfo`,
`CommentList` and `CommentInfo` displaying posts with comments and user details.

1. Create a `preparedPosts` array in the App with each `post` having a link to
  a `user` and `comments` array. And pass it to the `PostList`.
1. The `PostInfo` accepts a `post` object (with `user` and `comments`  
  properties added before) and renders a `title`, a `body`, a `UserInfo` and a
  `CommentList`
1. The `UserInfo` accepts a `user` object and renders at least a `name` and an
  `email`
1. The `CommentInfo` should show a `name`, a `body` and an `email`

REQUIREMENTS:
   - `preparedPosts` list should contain `data-cy="post-info"` attribute
   - `title` of each `post` in `PostInfo` should contain `data-cy="post-title"` attribute
   - `body` of each `post` in `PostInfo` should contain `data-cy="post-body"` attribute
   - `name` of the user in `UserInfo` should contain `data-cy="name"` attribute
   - `email` of the user in `UserInfo` should contain `data-cy="email"` attribute
   - `name` of the user in `CommentInfo` should contain `data-cy="comment-name"` attribute
   - `body` of the user in `CommentInfo` should contain `data-cy="comment-body"` attribute
   - `email` of the user in `CommentInfo` should contain `data-cy="comment-email"` attribute
   - `ul` in `CommentList` should contain `data-cy="comments-list"` attribute
