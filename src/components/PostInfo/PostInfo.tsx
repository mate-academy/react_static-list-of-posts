import React from 'react';

import './PostInfo.scss';

import { PostTypes } from '../../types/PostTypes';

export const PostInfo: React.FC<PostTypes> = ({ title, body }) => (
  <div className="item__post post">
    <span className="post__titleText">Title:</span>
    <span className="post__titlePost">
      {title}
    </span>
    <span className="post__bodyPost">
      <span className="post__postText">Post:</span>
      {body}
    </span>
  </div>
);
