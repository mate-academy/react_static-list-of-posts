import { User } from './User';

export interface Comment {
  user: User,
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}
