import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header';
import { ItemGroup } from 'semantic-ui-react';
import Post from '../post/Post';

const PostList = ({ postData }) => (
  <Grid container centered>
    <Grid.Column tablet="10">
      <Header as="h1">List of posts</Header>
      <ItemGroup divided>
        {postData.map(post => (
          <Post key={post.id} postData={post} />
        ))}
      </ItemGroup>
    </Grid.Column>
  </Grid>
);

PostList.propTypes = {
  postData: PropTypes.shape().isRequired,
};

export default PostList;
