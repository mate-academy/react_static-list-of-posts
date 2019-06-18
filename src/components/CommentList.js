import React from 'react';
import { Comment } from './Comment';

export const CommentList = props => {
  const {
    comments,
    id
    } = props;
    const arrForId = comments.filter(comment => {
      return comment.postId === id;
      });
      return (
        <div >
          { arrForId.map((comment) => {
            return (
              <Comment body={ comment.body } name={ comment.name } email={ comment.email }/>
        );
    })}
        </div>
  );
};
