import React from 'react';
import { CommentList } from '../CommentList/CommentList';
// import { preparedPosts } from '../../App';
import { PostInfo } from '../PostInfo/PostInfo';
// import { UserInfo } from '../UserInfo/UserInfo';

interface Props {
  posts: Post[],
}

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="content container is-fluid">
    {posts.map(post => (
      <li key={post.id} className="card card-content">
        <PostInfo post={post} />
        <CommentList comments={post.comments} />
      </li>
    ))}
  </ul>
);
