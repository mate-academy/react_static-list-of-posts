/// <reference types="react-scripts" />

interface User {
  name: string,
  email: string,
}

interface PostComment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}

interface PreparedPost {
  userId: number,
  id: number,
  title: string,
  body: string,
  author: User | null,
  postComments: PostComment[],
}
