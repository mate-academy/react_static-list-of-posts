import React from 'react';
import PropTypes from 'prop-types';

import { Post } from '../Post/Post';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';

export function PostList({ posts, users, comments }) {
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <>
            <Post post={post} />
            <User user={users.find(user => user.id === post.userId)} />
            <CommentList
              comments={comments.filter(coment => coment.postId === post.id)}
            />
          </>
        </li>
      ))}
    </ul>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  users: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  comments: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
