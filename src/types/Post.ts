import { Comment } from './comment';

import { User } from './User';

export interface Post {
  id: number;
  title: string;
  body: string;
  user: User | null;
  comments: Comment[];
}
