import { User } from './User';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: User | null;
}
