import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const Post = ({ preparedPost }) => (
  <>
    <ul className="list">
      <li className="list__userInfo">
        <h3 className="title">{preparedPost.title}</h3>
        <p className="body">{preparedPost.body}</p>
        <User author={preparedPost.author} comments={preparedPost.comments} />
      </li>
    </ul>
  </>
);

Post.propTypes = {
  preparedPost: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
      PropTypes.array,
    ]).isRequired,
  ),
};

export default Post;
