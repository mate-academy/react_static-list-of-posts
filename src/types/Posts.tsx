import User from './Users';
import Comment from './Comments';

export default interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: User | null;
  comments: Comment [];
}
