import { UsersFromServer } from './User';
import { Comment } from './Comment';

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
  user: UsersFromServer | null,
  comments: Comment[],
}
