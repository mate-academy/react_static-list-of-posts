import { CommentType } from "./CommentType";
import { User } from "./UserType";

export interface PostType {
  userId: number,
  id: number,
  title: string,
  body: string,
  comments: CommentType[],
  user?: User,
}
