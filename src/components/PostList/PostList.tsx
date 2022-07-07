import React from 'react';
import { PreparedPost } from '../../types/preparedPosts';
import { CommentList } from '../CommentList/CommentList';
import { PostInfo } from '../PostInfo/PostInfo';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostList.scss';

type Props = {
  preparedPosts: PreparedPost[],
};

export const PostList: React.FC<Props> = ({ preparedPosts = [] }) => (
  <ul className="posts">
    {
      preparedPosts.map(post => (
        <li
          className="posts__item"
          key={post.id}
        >
          <PostInfo post={post} />
          <UserInfo user={post.user} />
          <CommentList comments={post.comments} />
        </li>
      ))
    }

  </ul>
);
