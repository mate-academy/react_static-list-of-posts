import { User } from './users';
import { Comment } from './Comments';
import { Post } from './Posts';

export interface GlobalPost extends Post {
  user: User | null,
  comments: Comment[],
}
