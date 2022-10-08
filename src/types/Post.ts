import { CommentFromServer } from './Comment';
import { UserFromServer } from './User';

export interface PostFromServer {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: UserFromServer | null;
  comments: CommentFromServer[] | null;
}

