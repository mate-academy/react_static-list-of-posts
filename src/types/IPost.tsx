import { IComment } from './IComment';
import { IUser } from './IUser';

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: IUser | null;
  comments: IComment[];
}
