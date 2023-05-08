import { User } from './User';
import { Comments } from './Comment';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: User | null,
  comments: Comments[],
}
