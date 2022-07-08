import { Comment } from './Comment';
import { User } from './User';

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}

export interface PreparedPost extends Post {
  user: User | null,
  comments: Comment[]
}
