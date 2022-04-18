import { Comment } from './comment';

export interface Post {
  userId?: number,
  id?: number,
  title: string,
  body: string,
  user: User | null,
  comments: Comment[] | null,
}

interface User {
  id?: number,
  name: string,
  email: string,
}
