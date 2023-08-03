import { User } from './User';

export interface Posts {
  userId: number,
  id: number,
  title: string,
  body: string,
  user: User | null,
}
