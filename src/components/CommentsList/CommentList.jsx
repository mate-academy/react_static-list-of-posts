import React from 'react';
import './CommentList.scss';
import { CommentShape } from '../Shape';
import { Comment } from '../Comment/Comment';

export const CommentList = ({ comments }) => (
  <section className="comments">
    {comments.map(comment => <Comment {...comment} key={comment.id} />)}
  </section>
);

CommentList.propTypes = CommentShape;
