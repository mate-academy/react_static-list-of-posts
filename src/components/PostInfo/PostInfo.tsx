import React from 'react';
import { PreparedPost } from '../../types/preparedPost';
import { CommentList } from '../CommentList';

interface Props {
  post: PreparedPost;
}

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {post.title}
      </h3>

      <p>
        {' Posted by  '}

        <a className="UserInfo" href={`mailto:${post.author?.email || ''}`}>
          {`${post.author?.name || 'Unknown user'}`}
        </a>
      </p>
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    {
      post.comments.length > 0
        ? <CommentList comments={post.comments} />
        : <b data-cy="NoCommentsMessage">No comments yet</b>
    }

  </div>
);
