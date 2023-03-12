import { ComentType } from './ComentType';
import { UserType } from './User';

export interface OnePost {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: UserType | null;
  comments: ComentType[] | [];
}
