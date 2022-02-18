import { Comment } from './Comment';
import { User } from './User';

export interface PreparedPost {
  title: string
  body: string
  user: User
  comments: Comment[]
}
