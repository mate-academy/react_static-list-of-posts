import React from 'react';
import PropTypes from 'prop-types';

import './CommentList.scss';

import { Comment } from '../Comment';

export const CommentList = ({ postComments }) => (
  <div>
    <ul className="commentlist">
      {postComments.map(eachComment => (
        <li className="commentlist__item" key={eachComment.id}>
          <Comment {...eachComment} />
        </li>
      ))}
    </ul>
  </div>
);

CommentList.propTypes = {
  postComments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

CommentList.defaultProps = {
  postComments: [],
};
