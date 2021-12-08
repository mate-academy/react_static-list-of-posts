import React from 'react';
import { IPost } from '../../types/IPost';

import './PostInfo.scss';

type Props = Pick<IPost, 'title' | 'body'>;

export const PostInfo: React.FC<Props> = ({ title, body }) => {
  return (
    <div className="postInfo">
      <h3 className="postInfo__title">
        {title}
      </h3>
      <p className="postInfo__body">
        {body}
      </p>
    </div>
  );
};
