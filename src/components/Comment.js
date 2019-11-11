import React from 'react';

// eslint-disable-next-line react/prop-types
function Comment({ commentName, commentEmail, commentBody }) {
  return (
    <div>
      {commentName}
      <br />
      {commentEmail}
      <br />
      {commentBody}
      <br />
    </div>
  );
}

export default Comment;
