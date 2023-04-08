import { Post } from './Post';

export interface Comment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
  post: Post | null,
}
