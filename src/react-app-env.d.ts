/// <reference types="react-scripts" />
interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
}

interface Comments {
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

interface Posts extends Post {
  user: User | null,
  comments: Comments[],
}
