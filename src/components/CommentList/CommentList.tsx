import React from 'react';
import { IComments } from '../../types/IComment';
import { Comment } from '../Comment/Comment';

import './CommentList.scss';

type Props = {
  commentList: IComments[],
};

export const CommentList: React.FC<Props> = ({ commentList }) => {
  return (
    <div className="commentList">
      <h3 className="commentList__title">
        Comments
      </h3>
      {commentList.map(comment => {
        return (
          <Comment
            key={comment.id}
            name={comment.name}
            email={comment.email}
            body={comment.body}
          />
        );
      })}
    </div>
  );
};
