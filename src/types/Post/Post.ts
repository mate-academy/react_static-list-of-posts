import { User } from '../User/User'
import { Comments } from '../Comments/Comments'

export interface Post {
  id: number,
  userId: number,
  title: string,
  body: string,
  user: User | null,
  comments: Comments[] | null,
}