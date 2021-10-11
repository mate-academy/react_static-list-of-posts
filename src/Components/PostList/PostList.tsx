import React from 'react';
import './PostList.scss';
import { Post } from '../../type/Post';
import { PostInfo } from '../PostInfo/PostInfo';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentsList } from '../CommentsList/CommentsList';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="post__list">
    {posts.map((post) => {
      return post.user && (
        <li className="post">
          <PostInfo title={post.title} body={post.body} />
          <UserInfo name={post.user.name} email={post.user.email} />
          <h2 className="post__main-tittle">Comments:</h2>
          <CommentsList comments={post.comments} />
        </li>
      );
    })}
  </ul>
);
