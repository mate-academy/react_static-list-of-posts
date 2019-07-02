import React from 'react';
import { Segment, Comment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const PostComments = ({ comments }) => (
  <Segment>
    <Comment.Group>
      {comments.map(comment => (
        <Comment>
          <Comment.Content>
            <Comment.Author as="a">{comment.email}</Comment.Author>
            <Comment.Metadata>
              <div>
                {Math.floor(Math.random() * Math.floor(10)) + 1}
                {' '}
                days ago
              </div>
            </Comment.Metadata>
            <Comment.Text>{comment.body}</Comment.Text>
          </Comment.Content>
        </Comment>
      ))}
    </Comment.Group>
  </Segment>
);

const commentsTypes = PropTypes.shape({
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
});

PostComments.propTypes = {
  comments: PropTypes.arrayOf(commentsTypes).isRequired,
};

export default PostComments;
