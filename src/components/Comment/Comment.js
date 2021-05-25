import React from 'react';
import { TypeComment } from '../../types';

import './Comment.scss';

export function Comment({ name, body, email }) {
  return (
    <div className="comment">
      <h3 className="comment_name">{ name }</h3>
      <p className="comment_body">{ body }</p>
      <a className="comment_email" href={`mailto:${email}`}>{ email }</a>
    </div>
  );
}

Comment.propTypes = TypeComment;
