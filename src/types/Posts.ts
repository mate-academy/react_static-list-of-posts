import { CommentFromServer } from './Comments';
import { UserFromServer } from './Users';

export interface PostFromServer {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Post extends PostFromServer {
  user: UserFromServer | null;
  comments: CommentFromServer[] | null;
}
