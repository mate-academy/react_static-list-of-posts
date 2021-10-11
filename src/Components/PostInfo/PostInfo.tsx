import React from 'react';

type Props = {
  title: string;
  body: string;
};

export const PostInfo: React.FC<Props> = (({title, body}) => (
  <div className="post__header">
    <h1 className="post__tittle">{title}</h1>
    <p className="post__paragraph">{body}</p>
  </div>
));
