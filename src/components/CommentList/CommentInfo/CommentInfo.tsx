import React from 'react';

type Props = {
  name: string;
  email: string;
  body: string;
};

const CommentInfo: React.FC<Props> = ({ name, email, body }) => (
  <ul
    data-cy="comments-list"
    className="ul_styles_reset post__wrapper-item__comment"
  >
    <li data-cy="comment-name">
      <span className="span_style">Name:</span>
      {name}
    </li>
    <li data-cy="comment-body">
      <span className="span_style">Body:</span>
      {body}
    </li>
    <li data-cy="comment-email">
      <span className="span_style">Email:</span>
      {email}
    </li>
  </ul>
);

export default CommentInfo;
