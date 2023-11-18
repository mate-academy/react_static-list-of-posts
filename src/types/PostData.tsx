import { Comment } from './Comment';
import { User } from './User';

export interface PostData {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: User | null,
  comments: Comment[],
}
