import React from 'react';
import { Segment, Comment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const PostComments = ({ comments }) => (
  <Segment>
    <Comment.Group>
      {comments.map(comment => (
        <Comment key={comment.id}>
          <Comment.Content>
            <Comment.Author as="a">{comment.name}</Comment.Author>
            <Comment.Metadata>{comment.email}</Comment.Metadata>
            <Comment.Text>{comment.body}</Comment.Text>
          </Comment.Content>
        </Comment>
      ))}
    </Comment.Group>
  </Segment>
);

const commentsTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
});

PostComments.propTypes = {
  comments: PropTypes.arrayOf(commentsTypes).isRequired,
};

export default PostComments;
