import { User } from './userInterface';
import { Comment } from './commentInterface';

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
  user: User | null,
  comment: Comment[],
}
