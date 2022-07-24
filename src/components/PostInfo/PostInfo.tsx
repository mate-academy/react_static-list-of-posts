import './PostInfo.scss';

import { Post } from '../../types/Post';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {post.title}
      </h3>

      {' Posted by  '}

      {post.user !== undefined
        ? <UserInfo user={post.user} />
        : null}
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    {post.comments.length > 1
      ? <CommentList comments={post.comments} />
      : <strong>No comments yet</strong>}
  </>
);
