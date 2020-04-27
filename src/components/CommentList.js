import React from 'react';
import Comment from './Comment';
import { PropsType } from './CommentType';

const CommentList = ({ comments }) => (
  <article>
    Comments:&nbsp;
    {comments.map(comment => (
      <Comment {...comment} key={comment.id} />
    ))}
  </article>
);

CommentList.propTypes = {
  comments: PropsType,
};

export default CommentList;
