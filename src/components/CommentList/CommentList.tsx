import React from 'react';
import { Comments } from '../../types/Comments';
import { CommentInfo } from '../CommentInfo';

interface Props {
  comment: Comments | undefined;
}

export const CommentList: React.FC<Props> = (props) => {
  if (props.comment === undefined) {
    return (
      <>
        <hr />
        <b data-cy="NoCommentsMessage">No comments yet</b>
      </>
    );
  }

  return (
    <>

      <div className="CommentList">
        <CommentInfo comment={props.comment} />
      </div>
    </>
  );
};
