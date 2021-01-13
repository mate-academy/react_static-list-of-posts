import React from 'react';
import PropTypes from 'prop-types';
import { CommentType, PostType, AuthorType } from '../../types';

import { Post } from '../Post';

export const PostList = ({ posts, comments, users }) => (
  <div className="posts">
    {posts.map((post) => {
      const commentsOfPost = comments.filter(
        comment => post.id === comment.postId,
      );
      const author = users.find(user => post.userId === user.id);

      return <Post comments={commentsOfPost} post={post} author={author} />;
    })}

  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostType).isRequired,
  comments: PropTypes.arrayOf(CommentType).isRequired,
  users: PropTypes.arrayOf(AuthorType).isRequired,
};
