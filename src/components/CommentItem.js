import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from 'semantic-ui-react';

const CommentItem = ({ name, email, body }) => (
  <>
    <Comment>
      <Comment.Content>
        <Comment.Author as="a">{name}</Comment.Author>
        <Comment.Metadata>
          <div>5 days ago</div>
        </Comment.Metadata>
        <Comment.Text>{body}</Comment.Text>
        <Comment.Actions>
          <Comment.Action>{email}</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  </>
);

CommentItem.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default CommentItem;
