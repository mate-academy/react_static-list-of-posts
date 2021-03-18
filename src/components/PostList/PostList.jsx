import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';

import './PostList.scss';

export const PostList = ({ posts }) => (
  <>
    <div className="postList">
      {posts.map((post) => {
        const { user, comments} = post;
        const postProperties = {};
        postProperties.userId = post.userId;
        postProperties.id = post.id;
        postProperties.title = post.title;
        postProperties.body = post.body;

        return (
          <Post
            user={user}
            comments={comments}
            post={postProperties}
            key={post.id}
          />
        );
      })}
      <br />
    </div>
  </>
);

PostList.propTypes = {
  posts: PropTypes.array,
};
