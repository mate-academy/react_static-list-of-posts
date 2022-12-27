import React from 'react';

import { PreparedPost } from '../../types/PreparedPost';
import { CommentList } from '../CommentList';

type Props = {
  post: PreparedPost,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>
      <p>
        Posted by
        {' '}
        <a className="UserInfo" href={`mailto:${post.user.email}`}>
          {post.user.name}
        </a>
      </p>
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    {post.comments.length === 0 // post.comments.postId не знаходить таку властивість
      ? (
        <div>
          <hr />

          <b data-cy="NoCommentsMessage">No comments yet</b>
        </div>
      )
      : <CommentList comments={post.comments} />}
  </div>
);
