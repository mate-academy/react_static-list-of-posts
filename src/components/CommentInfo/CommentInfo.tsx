import React from 'react';
import commentsFromServer from '../../api/comments';

type Props = {
  postId: number,
};

export const CommentInfo: React.FC<Props> = ({ postId }) => (
  <>
    {commentsFromServer.map(comment => comment.postId === postId
    && (
      <div className="CommentInfo">
        <div className="CommentInfo__title">
          <strong className="CommentInfo__name">
            {comment.name}
          </strong>

          {' by '}

          <a
            className="CommentInfo__email"
            href={`mailto:${comment.email}`}
          >
            {comment.email}
          </a>
        </div>

        <div className="CommentInfo__body">
          {comment.body}
        </div>
      </div>
    ))}
  </>
);
