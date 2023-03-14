import { User } from './User';
import { Comment } from './Comment';

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
  user: User | null,
  comments: Comment[],
}

// { comments: Comment[];
//   id: number; title: string; body: string; userId: number;
//   user: User | null }[]
// }
