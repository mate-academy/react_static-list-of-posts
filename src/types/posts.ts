import { User } from './user';
import { Comments } from './comments';

export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostsToRender extends Posts {
  user: User | null;
  comments: Comments[];
}
