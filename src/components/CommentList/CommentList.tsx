import React from 'react';

import CommentInfo from '../CommentInfo/index';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = (props) => {
  const { comments } = props;

  return (
    <div>
      {comments.map(comment => (
        <div key={comment.id}>
          <div>
            <CommentInfo {...comment} />
          </div>
        </div>
      ))}
    </div>
  );
};
