import React from 'react';
import { Comment } from '../comment/Comment';
import { CommentListShape } from '../shapes/CommentListShape';

export const CommentList = ({ comments }) => (
  <div className="comments-list">
    <h3 className="comments-list__title">
      Comments:
    </h3>
    <ul>
      {comments.map(comment => (
        <Comment
          body={comment.body}
          name={comment.name}
          email={comment.email}
          key={comment.id}
        />
      ))}
    </ul>
  </div>
);

CommentList.propTypes = CommentListShape;
