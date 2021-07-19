import React from 'react';

export function CommentList({ post, users }) {
  return (
    post.map(el => (
      <>
        <p>{el.title}</p>
        <p>
          {users.find(use => use.id === el.userId).name}
        </p>
        <p>
          {users.find(use => use.id === el.userId).email}
        </p>
        <p>
          {users.find(use => use.id
            === el.userId).address.suite}
        </p>
        <hr />
      </>
    ))
  );
}
