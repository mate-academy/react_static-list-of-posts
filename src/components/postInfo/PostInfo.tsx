import { Post } from '../../types/Post';

import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="post">
    <div className="post__title">{post.title}</div>
    <div className="post__body">{post.body}</div>
    {post.user && <UserInfo user={post.user} />}
    <div className="post__comments">
      <div>Comments:</div>
      <CommentList comments={post.comment} />
    </div>
  </div>
);
