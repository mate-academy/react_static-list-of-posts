import { Comment } from './Comment';
import { User } from './User';

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
}

export interface PostComplete extends Post {
  comments: Comment[],
  user: User | null,
}
