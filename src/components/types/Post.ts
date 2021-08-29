import { User } from './User';
import { Comment } from './Comment';

export interface Post {
  userId: number;
  id: number;
  user: User | undefined;
  title: string;
  body: string;
  usersComments: Comment[];
}
