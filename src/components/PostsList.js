/* eslint-disable jsx-quotes */
import React from 'react';
import {
  Grid,
} from 'semantic-ui-react';

import posts from '../api/posts';
import users from '../api/users';
import comments from '../api/comments';

import PostContent from './postContent/PostContent';

const currentPosts = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const PostsList = () => (
  <Grid centered columns={2}>
    <Grid.Column>
      {currentPosts.map(post => <PostContent key={post.id} post={post} />)}
    </Grid.Column>
  </Grid>
);

export default PostsList;
