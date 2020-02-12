import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment';
import './commentsList.css';

const CommentList = ({ data }) => (
  <>
    {data.map(item => (
      <li key={item.id} className="comment">
        <Comment {...item} />
      </li>
    ))}
  </>
);

CommentList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default CommentList;
