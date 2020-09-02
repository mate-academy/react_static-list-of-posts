import React from 'react';

import './Comment.scss';
import { CommentShape } from './Shape';

export const Comment = comment => (
  <section className="Comment">
    <div>
      <span>{comment.name}</span>
      <br />
      <span>{comment.email}</span>
    </div>
    <div className="Comment__body">
      <span>
        From
        {comment.body}
      </span>
    </div>
  </section>
);

Comment.propTypes = CommentShape;
