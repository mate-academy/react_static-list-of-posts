import React from 'react';
import { Comment } from '../Comment';
import { TypeCommentList } from '../../types';
import './CommentList.scss';

const CommentList = ({ comments }) => (
  <ul className="comment-list">
    <h4 className="comment-list__title">Comments:</h4>
    {comments.map(comment => (
      <li className="comment" key={comment.id}>
        <Comment comment={comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: TypeCommentList.isRequired,
};

export { CommentList };
