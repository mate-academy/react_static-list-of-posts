import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[]
};

export const CommentList: React.FC<Props> = props => {
  const { comments } = props;

  return (
    <div className="post__comments-list">
      <p className="title">Comments</p>

      {comments.map(comment => {
        const {
          name,
          body,
          email,
          id,
        } = comment;

        return (
          <>
            <div className="box">
              <CommentInfo
                key={id}
                title={name}
                userEmail={email}
                commentText={body}
              />
            </div>
          </>
        );
      })}
    </div>
  );
};
