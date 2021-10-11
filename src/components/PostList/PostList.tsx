import React from 'react';

import './PostList.scss';

import { PostTypes } from '../../types/PostTypes';

import { UserInfo } from '../UserInfo';
import { PostInfo } from '../PostInfo';
import { CommentList } from '../CommentList';
import comments from '../../api/comments';

type Props = {
  posts: PostTypes[];
};

export const PostList: React.FC<Props> = ({ posts = [] }) => (
  <ul className="postList">
    {posts.map((post) => {
      return post.user && (
        <li className={`postList__item item ${post.id}`}>
          <UserInfo
            name={post.user.name}
            username={post.user.username}
            email={post.user.email}
            id={post.id}
          />
          <PostInfo {...post} />
          <CommentList comments={comments} />
        </li>
      );
    })}
  </ul>
);
