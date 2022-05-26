import { CommentType } from './CommentType';
import { UserType } from './UserType';
import { PostType } from './PostType';

export interface PreparedPostsType extends PostType {
  author?: UserType;
  comments?: CommentType[];
}
