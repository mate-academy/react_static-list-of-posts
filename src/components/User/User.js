import React from 'react';

export const User = author => (
  <div className="post__author">
    <span className="post__author-name">{author.name}</span>
    <a href={`mailto:${author.email}`}>{author.email}</a>
    <span>{author.address.city}</span>
  </div>
);
