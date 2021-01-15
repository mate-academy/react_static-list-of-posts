import React from 'react';
import { commentsType } from '../../typesValidation';
import { Comment } from '../Comment';
import './commentList.scss';

export const CommentList = ({ comments }) => (
  <div className="commentList">

    {disscus.map(comment => (
      <div className="comment" key={comment.id}>
        <Comment {...comment} />
      </div>
    ))}

  </div>
);

CommentList.propTypes = {
  disscus: commentsType.isRequired,
};
