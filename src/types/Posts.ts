import { User } from './User';
import { Comment } from './Comment';

export interface Posts {
  userId: number,
  id: number,
  title: string,
  body: string,
  user: User | null,
  comments: Comment[]
}
