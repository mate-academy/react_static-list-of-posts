import { FC } from 'react';
import { CommentList } from '../CommentList';

import { PostPorps } from '../../types';
import { UserInfo } from '../UserInfo';

export const PostInfo: FC<PostPorps> = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {' Posted by  '}

        {post.user !== null && <UserInfo user={post.user} />}
      </p>
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    <hr />

    {
      !post.comments.length
        ? <b data-cy="NoCommentsMessage">No comments yet</b>
        : <CommentList comments={post.comments} />
    }
  </div>
);
