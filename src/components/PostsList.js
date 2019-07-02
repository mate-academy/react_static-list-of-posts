/* eslint-disable jsx-quotes */
import React from 'react';
import {
  Grid,
} from 'semantic-ui-react';

import posts from '../api/posts';
import users from '../api/users';
import comments from '../api/comments';

import PostContent from './postContent/PostContent';

let currentPosts = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const PostsList = () => {
  currentPosts = currentPosts.map(post => <PostContent post={post} />);

  return (
    <Grid centered columns={2}>
      <Grid.Column>
        {currentPosts}
      </Grid.Column>
    </Grid>
  );
};

export default PostsList;
