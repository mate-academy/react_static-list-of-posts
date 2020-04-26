import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from 'semantic-ui-react';
import { getMessageDate } from './getMessageDate';

const CommentItem = ({ id, name, email, body }) => (
  <>
    <Comment className="comment">
      <Comment.Content>
        <Comment.Author className="comment__title" content={name} />
        <Comment.Metadata>
          {`comment was added on ${getMessageDate(id)}`}
        </Comment.Metadata>
        <Comment.Text className="comment__text" content={body} />
        <Comment.Metadata>
          <Comment.Action content={email} />
        </Comment.Metadata>
      </Comment.Content>
    </Comment>
  </>
);

CommentItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default CommentItem;
