import { Comments } from './Comments';
import { User } from './User';

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}

export interface Posts extends Post {
  user: User | null,
  commentsList: Comments[] | null,
}
