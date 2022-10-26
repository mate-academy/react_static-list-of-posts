import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

interface Props {
  comments: Comment[],
}

export const CommentList: React.FC<Props> = (props) => {

  if (props.comments.length === 0) {
    return (
      <>
        <hr />
    
        <b data-cy="NoCommentsMessage">No comments yet</b>
      </>
    )
  } else {
    return (
      <div className="CommentList">
        {props.comments.map(comment => (
          <CommentInfo {...comment} />
        ))}
      </div>
    )
  }
};



