import React from 'react';
import propTypes from 'prop-types';

import { Post } from '../Post/Post';
import { postType, commentType, userType } from '../../Types';

import './PostList.scss';

export const PostList = ({ posts, comments, users }) => (
  <ul className="postList">
    {posts.map((post) => {
      const commentsForPost = comments.filter(
        comment => comment.postId === post.id,
      );
      const user = users.find(
        uniqUser => uniqUser.id === post.userId,
      );

      return (
        <li key={post.id}>
          <Post
            post={post}
            commentsForPost={commentsForPost}
            user={user}
          />
        </li>
      );
    })}
  </ul>
);

PostList.propTypes = {
  posts: propTypes.arrayOf(postType).isRequired,
  comments: propTypes.arrayOf(commentType).isRequired,
  users: propTypes.arrayOf(userType).isRequired,
};
