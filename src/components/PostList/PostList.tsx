import React from 'react';
import { PostWithAllDate } from '../../types/postWithAllDate';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: PostWithAllDate[]
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    <ul>
      {
        posts && posts.map((object: PostWithAllDate) => (
          <li><PostInfo post={object} key={object.id} /></li>
        ))
      }
    </ul>
  </div>
);
