import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';

import { Comment } from '../../interfaces/Comment';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <>
    <h2 className="post__comments-caption">Comments</h2>
    {comments.map((comment) => {
      return (
        <ul key={comment.id}>
          <CommentInfo
            name={comment.name}
            body={comment.body}
            email={comment.email}
          />
        </ul>
      );
    })}
  </>
);
