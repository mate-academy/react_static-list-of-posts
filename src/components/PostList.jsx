import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostList = ({ list }) => (
  <>
    {list.map(elem => (
      <div key={elem.id} className="post">
        <Post {...elem} />
      </div>
    ))}
  </>
);

PostList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default PostList;
