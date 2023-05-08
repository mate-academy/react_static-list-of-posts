import { User } from "./user";
import { Comment } from "./commnet";

export interface Posts {
  userId: number,
  id: number, 
  title: string, 
  body: string, 
  user: User | null,
  comments: Comment[],
}