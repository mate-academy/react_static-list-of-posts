import React from 'react';

import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

import './PostList.scss';

type Props = {
  postList: Post[],
};

export const PostList: React.FC<Props> = ({ postList }) => {
  return (
    <div className="fullPost">
      <div className="fullPost__container">
        <ul className="fullPost__list">
          {postList.map((post) => {
            return (
              <li key={post.id}>
                <PostInfo post={post} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
