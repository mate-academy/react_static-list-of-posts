import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';
import { CommentList } from '../CommentList';
import { userType, postType, commentsType } from '../typedefs';

import './PostList.scss';

export const PostList = ({ posts }) => (
  <>
    {posts.map(post => (
      <article
        key={[post.id]}
        className="Post"
      >
        <Post {...post} />
        <span className="commentsHeader">Comments:</span>
        <ul>
          <CommentList comments={post.comment} />
        </ul>
      </article>
    ))}
  </>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape(
    postType, userType, commentsType,
  )).isRequired,
};
