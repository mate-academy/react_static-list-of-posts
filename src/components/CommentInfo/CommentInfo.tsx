import React from 'react';

import './CommentInfo.scss';

interface Props {
  name: string,
  body: string,
  email: string,
}

export const CommentInfo: React.FC<Props> = ({ name, body, email }) => (
  <>
    <div className="comment">
      <div className="comment__author">
        {`Commented by ${name}:`}
      </div>
      <div className="comment__text">
        {body}
      </div>
      <div className="comment__contact">
        {`Contact: ${email}`}
      </div>
    </div>

  </>
);
