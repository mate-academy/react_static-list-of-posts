import { CommentFromServer } from './CommentFromServer';
import { PostFromServer } from './PostFromServer';
import { UserFromServer } from './UserFromServer';

export interface Post extends PostFromServer {
  user: UserFromServer | null;
  comments: CommentFromServer[];
}
