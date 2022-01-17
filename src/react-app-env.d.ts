/// <reference types="react-scripts" />
interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
  user: User | null,
  comments: Comments[],
}

interface User {
  name: string,
  email: string,

}

interface Comments {
  name: string,
  body: string,
  email: string,
}
