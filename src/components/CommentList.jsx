import React from 'react';

export const CommentList = (com) => (
  <>
    <h3>{com.name}</h3>
    <p>{com.body}</p>
    <a href="#" className="email">{com.email}</a>
  </>
);
