import React from 'react';
import './Comments.scss';
import { ComentsType } from '../../Types';

export const Comment = ({ name, body, email }) => (
  <div className="Comment">
    <h4>{name}</h4>
    <p>{body}</p>
    <p className="Comment__email">
      <a href="mailto: office@enfold-health.com">
        {email}
      </a>
    </p>
  </div>
);

Comment.propTypes = ComentsType;
