import React from 'react';
import Comment from './Comment';


const CommentList = ({ data }) => {
  const comments = data.map(comment => <Comment data={comment} />);

  return (
    <div>
      {comments}
    </div>
  );
};

export default CommentList;
