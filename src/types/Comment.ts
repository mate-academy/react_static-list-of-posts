import { Post } from './Post';

export interface Comment {
  post: Post | undefined;
  id: number;
  name: string;
  email: string;
  body: string;
}
