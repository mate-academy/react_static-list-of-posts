import { User } from './User';
import { Comment } from './Comment';

export interface FBPost {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: User | null;
  comments: Comment[];
}
