/// <reference types="react-scripts" />
interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
  comments: CommentTypes[],
  user: User | undefined,
}

interface CommentTypes {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}

interface User {
  id: number,
  name: string,
  username: string,
  email: string,
}
