import { User } from './User';
import { Comment } from './Comment';

export interface PreaperedPost {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: User | undefined;
  comments: Comment[]
}
