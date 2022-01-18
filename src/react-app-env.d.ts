/// <reference types="react-scripts" />

interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
}

interface User {
  name: string,
  email: string,
}

interface Coment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}

interface PreparedPost extends Post{
  user: User | null,
  comments: Coment[] | null,
}
