import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

import './PostInfo.scss';

interface Props {
  post: Post;
}

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      {' Posted by  '}

      {post.user
        ? <UserInfo user={post.user} />
        : <p>Anonimus writer</p>}
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    <hr />

    { post.comments.length === 0
      ? <b>No comments yet</b>
      : <CommentList comments={post.comments} /> }
  </div>
);
