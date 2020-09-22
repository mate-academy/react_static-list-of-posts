import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';

import './CommentList.scss';

export const CommentList = ({ commentsList }) => (
  <div>
    <ul className="commentStyleList">
      {commentsList.map(comment => (
        <li className="commentItem" key={comment.id}>
          <Comment {...comment} />
        </li>
      ))}
    </ul>
  </div>

);

CommentList.propTypes = {
  commentsList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired),
};

CommentList.defaultProps = {
  commentsList: [],
};
