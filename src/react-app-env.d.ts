/// <reference types="react-scripts" />

interface Post {
  user: User | null,
  title: string,
  body: string,
  comments: Comments[],
  userId: number,
  id: number,
}

interface User {
  name: string,
  email: string,
}

interface Comments {
  name: string,
  email: string,
  body: string,
  id: number,
}
