import Post from './Post';
import User from './User';
import CommentInterface from './CommentInterface';

export interface PostPrepared extends Post {
  user?: User;
  comments: CommentInterface[];
}
