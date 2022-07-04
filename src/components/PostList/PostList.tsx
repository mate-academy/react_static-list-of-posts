import React from 'react';
import { Post } from '../../types';
import { CommentList } from '../CommentList/CommentList';
import { PostInfo } from '../PostInfo/PostInfo';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostList.scss';

type Props = {
  posts: Post [];
};

export const PostList: React.FC<Props> = ({ posts = [] }) => (
  <ul className="posts">
    {
      posts.map(post => (
        <li className="posts__item" key={post.id} data-cy="post-info">
          <PostInfo title={post.title} body={post.body} />
          <UserInfo user={post.user} />
          <CommentList comments={post.comments} />
        </li>
      ))
    }
  </ul>
);
