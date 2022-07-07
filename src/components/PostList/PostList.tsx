// import { type } from 'os';
import React from 'react';
import { CommentList } from '../CommentList/CommentList';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';
import { Posts } from '../../types/Posts';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  posts: Posts[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="post">
    {posts.map(post => (
      <li className="post__list" key={post.id + post.userId}>
        <PostInfo
          title={post.title}
          body={post.body}
        />
        <UserInfo name={post.user.name} email={post.user.email} />
        <CommentList comments={post.comments} />
      </li>
    ))}
  </ul>
);
