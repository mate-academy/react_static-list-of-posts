import { User } from './User';
import { UserComment } from './UserComment';

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
  user: User,
  comments: UserComment[],
}
