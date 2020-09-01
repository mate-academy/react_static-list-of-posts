import React from 'react';
import PropTypes from 'prop-types';

import { Post } from '../Post/Post';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';
import { CommentType } from '../../Typedefs';

export const PostList = ({ posts, users, comments }) => (
  <ul>
    {posts.map(post => (
      <li key={post.id}>
        <div>
          <Post post={post} />
          <User user={users.find(user => user.id === post.userId)} />
          <CommentList
            comments={comments.filter(coment => coment.postId === post.id)}
          />
        </div>
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(CommentType).isRequired,
  users: PropTypes.arrayOf(CommentType).isRequired,
  comments: PropTypes.arrayOf(CommentType).isRequired,
};
