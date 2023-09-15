import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

import { Post } from '../../types/Post';

import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo = ({ post }: Props) => (
  <div className="postInfo">
    <div className="postInfo__header">
      <h3 className="postInfo__title">{post.title}</h3>
      <p>
        {'Posted by  '}
        {post.user && <UserInfo user={post.user} />}
      </p>
    </div>
    <p className="postInfo__body">
      {post.body}
    </p>
    <hr />

    {post.comments.length === 0 ? (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    ) : (
      <CommentList comments={post.comments} />
    )}
  </div>
);
