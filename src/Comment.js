import React from 'react';

const Comment = ({ commentsData }) => (
  commentsData.map(({ name, email, body }) => (
    <>
      <dt>
        {name}
        <br />
        {email}
      </dt>
      <dd>{body}</dd>
    </>
  ))
);

export default Comment;
