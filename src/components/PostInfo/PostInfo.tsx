import React from 'react';
import './PostInfo.scss';

type Props = {
  title: string;
  body: string;
};

export const PostInfo: React.FC<Props> = (({ title, body }) => (
  <div className="item__post post">
    <div className="post__title">
      {title}
    </div>
    <p className="post__body">
      {body}
    </p>
  </div>
));
