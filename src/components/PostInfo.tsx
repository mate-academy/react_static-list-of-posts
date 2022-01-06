import { UserInfo } from './UserInfo';
import { CommentInfo } from './CommentInfo';

import { PreparedPosts } from "../types/Types";

type Post = {
  post: PreparedPosts;
};

export const PostInfo: React.FC<Post> = ({ post }) => (
  <>
    <UserInfo user={post.user} />
    <CommentInfo comments={post.comments} />
  </>
);
