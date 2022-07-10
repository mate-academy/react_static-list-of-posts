import React from 'react';
import './PostList.scss';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList/CommentList';
import { PostInfo } from '../PostInfo/PostInfo';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  posts: Post [];
};

export const PostList: React.FC<Props> = ({ posts = [] }) => (
  <ul className="posts">
    {
      posts.map(post => (
        <li
          key={post.id}
          data-cy="post-info"
          className="posts__item"
        >
          <PostInfo
            title={post.title}
            body={post.body}
          />
          <UserInfo user={post.user} />
          <CommentList comments={post.comments} />
        </li>
      ))
    }
  </ul>
);
