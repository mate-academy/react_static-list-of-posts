import {User} from './UserTypes';
import { Comment } from './CommentTypes'

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
    user?: User | null;
    comments: Comment[];
  }

export type PostInfoProps = {
  title: string;
  body: string;
 }
