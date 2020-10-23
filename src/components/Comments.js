import React from 'react';
import { CommentShape } from './shapes/CommentShape';
import './Comments.scss';

export const Comments = (props) => {
  const { name, body, email } = props;

  return (
    <div className="comments">
      <p className="comments__name">
        {name}
      </p>
      <p className="comments__email">
        {`Email: ${email}`}
      </p>
      <p className="comments__body">
        {body}
      </p>
    </div>
  );
};

Comments.propTypes = CommentShape;
