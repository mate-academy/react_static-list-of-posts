import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import { MergePostsUsers, Comment } from '../../interfaces/interfaces';

import './PostList.scss';

type Props = {
  postList: MergePostsUsers[];
  comments: Comment[];
};

export const PostList: React.FC<Props> = ({ postList = [], comments = [] }) => (
  <ul>
    {postList.map(post => (
      <li
        key={post.id}
        className="postInfo"
        data-cy="post-info"
      >
        <PostInfo
          {...post}
          comments={comments}
        />
      </li>
    ))}
  </ul>
);
