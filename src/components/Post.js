import React from 'react';

import User from './User';
import CommentList from './CommentList';

function Post({
  // eslint-disable-next-line react/prop-types
  post: {
    title, body, user: { name, email, address }, commentsList,
  },
}) {
  return (
    <div>
      <h2>
        Title.
        <br />
        {title}
      </h2>
      <h3>
        Text.
        <br />
        {body}
      </h3>
      <User name={name} email={email} address={address} />
      <CommentList commentsList={commentsList} />
    </div>
  );
}

export default Post;
