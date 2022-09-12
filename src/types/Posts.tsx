import { CommentsFromServer } from './Comments';
import { UsersFromServer } from './Users';

export interface PostFromServer {
  userId: number,
  id: number,
  title: string,
  body: string,
}

export interface Posts extends PostFromServer {
  user: UsersFromServer | null,
  comments: CommentsFromServer[],
}
