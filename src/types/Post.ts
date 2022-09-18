import { User } from './User';
import { Comment } from './Comment';

interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
  comments: Comment[],
  user: User | null,
}

export type { Post };
