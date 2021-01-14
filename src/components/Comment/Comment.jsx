import React from 'react';
import { commentType } from '../../typesValidation';
import './comment.scss';

export const Comment = ({ name, body, email }) => (
  <>
    <div className="commentingUser">

      <div className="commentingUserName">
        {name}
      </div>

      <div className="commentingUserMail">
        @:
        {' '}
        {email}
      </div>

    </div>

    <div>
      {body}
    </div>
  </>
);

Comment.propTypes = commentType.isRequired;
