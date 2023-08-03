import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comments } from '../../types/Comments';
// import filterCommentsByPost from '../../utils/filterCommentsByPost';

type Props = {
  comments: Comments[]
  // postId: number,
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  // const filteredComments = filterCommentsByPost(postId, comments);

  return (
    <div className="CommentList">
      {comments.map((comment) => (
        <CommentInfo
          key={comment.id}
          comment={comment}
        />
      ))}
    </div>
  );
};
