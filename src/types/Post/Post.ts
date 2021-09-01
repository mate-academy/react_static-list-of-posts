import { User } from '../User/User'
import { Comments } from '../Comment/Comment'

export interface Post {
  id: number,
  userId: number,
  title: string,
  body: string,
  user: User | null,
  comments: Comments[] | null,
}