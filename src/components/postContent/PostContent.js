import React from 'react';
import { Segment, Header } from 'semantic-ui-react';

import PropTypes from 'prop-types';
import PostComments from './PostComments';

const PostContent = ({ post }) => (
  <Segment.Group>
    <Segment>
      <Header size="small">{post.user.name}</Header>
      <div>{post.title}</div>
    </Segment>

    <PostComments comments={post.comments} />
  </Segment.Group>
);

PostContent.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
  }).isRequired,
};

export default PostContent;
