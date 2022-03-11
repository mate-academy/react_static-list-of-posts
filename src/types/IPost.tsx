import { IComment } from './Comment';
import { IUser } from './User';

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
  user?: IUser;
  comments?: IComment[];
}

export type IPostRequired = Required<IPost>;
