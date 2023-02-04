import { User } from './User';

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
  user: User | null;
}
