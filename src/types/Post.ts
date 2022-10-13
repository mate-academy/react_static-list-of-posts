import { Comment } from './Comment';
import { User } from './User';

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
}

export interface ExtendedPost extends Post {
  user?: User,
  comments: Comment[]
}
