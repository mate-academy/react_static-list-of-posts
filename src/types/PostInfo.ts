import { User } from './UserInfo';
import { Comment } from './CommentInfo';

export interface Post {
  id: number,
  title: string,
  body: string,
  user: User | null
  comments: Comment[]
}
