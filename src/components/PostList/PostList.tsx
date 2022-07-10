import React from 'react';
import { Post } from '../../types/posts';
import { CommentList } from '../CommentList/CommentList';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <>
    <ul className="post-list">
      {posts.map(post => (
        <li className="post-list__item">
          <PostInfo post={post} />
          <CommentList comments={post.comments} />
        </li>
      ))}
    </ul>
  </>
);
