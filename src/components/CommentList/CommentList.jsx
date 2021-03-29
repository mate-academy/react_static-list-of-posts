import React from 'react';
import './CommentList.scss';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';
import { CommentShape } from '../../types';

export const CommentList = ({ list }) => (
  <ul className="Comment-list">
    {list.map(listItem => (
      <li key={listItem.id} className="Comment-list__comment">
        <Comment {...listItem} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  list: PropTypes.arrayOf(CommentShape).isRequired,
};
