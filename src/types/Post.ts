import { User } from './User';
import {Comment} from '../types/Comment';

export interface Post {
  id: number;
  title: string;
  body: string;
  user: User | null;
  comment: Comment[];
}
