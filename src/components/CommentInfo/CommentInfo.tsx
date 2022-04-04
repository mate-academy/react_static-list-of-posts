import React from 'react';
import './CommentInfo.scss';

type Props = {
  name: string,
  email: string,
  body: string,
};

const CommentInfo: React.FC<Props> = ({
  name,
  email,
  body,
}) => (
  <>
    <div className="post__commentator">
      <div className="post__commentator-name">
        <strong>{`Username: ${name}`}</strong>
      </div>

      <div className="post__commentator-email">
        {`Email: ${email}`}
      </div>
    </div>

    <div className="post__commentator-content">
      {body}
    </div>
  </>
);

export default CommentInfo;
