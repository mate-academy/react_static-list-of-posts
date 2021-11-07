import { User } from './User';
import { Comment } from './Comment';

export interface PreparedPost {
  user: User | null,
  comments: Comment[],
  userId: number;
  id: number;
  title: string;
  body: string;
}
