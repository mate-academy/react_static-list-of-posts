import { User } from './User';
import { Comment } from './Comment';

export interface Data {
  userId: number;
  id: number;
  title: string;
  body: string;
  user?: User;
  comments?: Comment[] | null;
}
