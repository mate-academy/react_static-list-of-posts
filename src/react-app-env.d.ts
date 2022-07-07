/// <reference types="react-scripts" />
interface Comment {
  postId: number
  id: number,
  name: string,
  email: string,
  body: string,
}

interface User {
  name: string,
  email: string,
}

interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
  user: User,
  comments: Comment[],
}
