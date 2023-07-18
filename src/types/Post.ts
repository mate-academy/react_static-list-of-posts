import { User } from './User';

export interface Post {
  user: User | undefined;
  id: number;
  title: string;
  body: string;
}
