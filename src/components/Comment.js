import React from 'react';

export function Comment(props) {
  const {
    name,
    email,
    body,
  } = props;

  return (
    <div className="comment-item">
      <p>Comment by <span className="name">{name}</span></p>
      <p>
        Email: <a href={`mailto:${email}`}>{email}</a>
      </p>
      <p>{body}</p>
    </div>
  );
}
