import React, { Fragment } from 'react';
import { postsCommentsShape } from './Shapes';
import { Comment } from './Comment';
import './Comments.css';

export const Comments = (props) => {
  const { comments } = props;

  return (
    <ul className="list-group">
      {comments.map(({ name, email, body, id }) => (
        <Fragment key={id}>
          <Comment
            commentatorName={name}
            commentatorEmail={email}
            commentText={body}
          />
        </Fragment>
      ))}
    </ul>
  );
};

Comments.propTypes = {
  comments: postsCommentsShape.isRequired,
};
