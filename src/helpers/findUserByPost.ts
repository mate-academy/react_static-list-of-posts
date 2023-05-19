import { Post } from "../types/post";
import { User } from "../types/user";

export function findUserByPost(postInfo: Post, users: User[]) {
  return users.find(user => user.id === postInfo.userId);
};