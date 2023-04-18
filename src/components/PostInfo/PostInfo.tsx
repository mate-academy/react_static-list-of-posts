import React from 'react';
import { PreparedPost } from '../../types/preparedPost';
import { CommentList } from '../CommentList';

interface Props {
  post: PreparedPost;
}

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    author,
    body,
    comments,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>

        <p>
          {' Posted by  '}

          <a className="UserInfo" href={`mailto:${author?.email || ''}`}>
            {`${author?.name || 'Unknown user'}`}
          </a>
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      {
        comments.length
          ? <CommentList comments={comments} />
          : <b data-cy="NoCommentsMessage">No comments yet</b>
      }

    </div>
  );
};
