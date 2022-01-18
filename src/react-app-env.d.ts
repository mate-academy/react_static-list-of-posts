/// <reference types="react-scripts" />

interface Commentary {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}

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
  user: User | null,
  comments: Commentary[],
}
