import { Comment } from "./Comment";
import { User } from "./User";

export interface Post {
  id: number,
  userId: number,
  title: string,
  body: string,
  user: User | null,
  comments: Comment[],
}
