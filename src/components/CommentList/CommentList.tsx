import React from 'react';
import { Comments } from '../../types/Comments';
import { CommentInfo } from '../CommentInfo';

interface Props {
  comments: Comments[];
  postId: number | undefined;
}

export const CommentList: React.FC<Props> = (props) => {
  // const found = props.comments.find(
  //   (comment) => comment.postId !== props.postId,
  // );

  // if (found) {
  //   return (
  //     <>
  //       <hr />
  //       <b data-cy="NoCommentsMessage">No comments yet</b>
  //     </>
  //   );
  // }

  return (
    <>
      {props.comments.filter(
        comment => comment.postId === props.postId,
      ).map((comment) => (
        <div className="CommentList" key={comment.id}>
          <CommentInfo comment={comment} />
        </div>
      ))}
    </>
  );
};
