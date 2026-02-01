import { UsersType } from './../types/UsersType';
import { CommentsType } from './../types/CommentsType';

export interface PostsType {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: UsersType | null;
  comments: CommentsType[] | null;
}
