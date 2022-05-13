import React from 'react';
import { PropType } from '../../types/PropType';

import { CommentList } from '../CommentList/CommentList';

import { PostInfo } from '../PostInfo/PostInfo';

import './PostList.scss';

type Props = {
  prepPosts: PropType[],
};

export const PostList: React.FC<Props> = ({ prepPosts }) => (
  <ul className="list">
    {prepPosts.map(post => (
      <li key={post.id} className="list__item">
        <PostInfo post={post} />
        <h3 className="alert">Comments</h3>
        <CommentList comments={post.comments} />
      </li>
    ))}
  </ul>
);
