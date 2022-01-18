/// <reference types="react-scripts" />

interface User {
  id: number,
  name: string,
  email: string,
}

interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
}

interface PostComment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}

interface PreparedPost extends Post {
  user: User | null,
  comments: PostComment[] | null,
}
