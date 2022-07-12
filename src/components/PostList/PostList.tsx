import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import { MergePostsUsers } from '../../interfaces/interfaces';

import './PostList.scss';

type Props = {
  postList: MergePostsUsers[];
};

export const PostList: React.FC<Props> = ({ postList = [] }) => (
  <ul>
    {postList.map(post => (
      <li
        key={post.id}
        className="postInfo"
        data-cy="post-info"
      >
        <PostInfo
          post={post}
        />
      </li>
    ))}
  </ul>
);
