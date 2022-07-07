import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import { MergePostsUsers, Comment } from '../../interfaces/interfaces';

import './PostList.scss';

type Props = {
  postList: MergePostsUsers[];
  comment: Comment[];
};

export const PostList: React.FC<Props> = ({ postList = [], comment = [] }) => (
  <ul>
    {postList.map(post => (
      <li
        key={post.id}
        className="postInfo"
        data-cy="post-info"
      >
        <PostInfo
          title={post.title}
          body={post.body}
          user={post.user}
          comment={comment}
        />
      </li>
    ))}
  </ul>
);
