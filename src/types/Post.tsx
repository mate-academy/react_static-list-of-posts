import { Comment } from './Comment';
import { User } from './User';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  user?: User;
  comments?: Comment[];
}

export type PostRequired = Required<Post>;
