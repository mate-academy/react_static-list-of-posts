/// <reference types="react-scripts" />
interface User {
  id: number,
  name: string,
  email: string,
}

interface Comment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}

interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
  user: User | null,
  comment: Comment[],
}
