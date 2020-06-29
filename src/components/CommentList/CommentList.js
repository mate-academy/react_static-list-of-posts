import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import { Comment } from '../Comment/Comment';
import { CommentListShape } from './CommentListShape';

export const CommentList = (props) => {
  const { comments } = props;

  return (
    <ListGroup>
      {comments.map(comment => (
        <ListGroup.Item
          variant="light"
          key={comment.id}
        >
          <Comment
            {...comment}
          />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

CommentList.propTypes = CommentListShape.isRequired;
