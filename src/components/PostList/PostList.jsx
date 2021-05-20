import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';
import './PostList.scss';
import { commentType, userType } from '../../types';

export const PostList = ({ preparedData }) => {
  
  console.log(preparedData.comments);

  return (
  <section className="post-list">
    {preparedData.map(post => (
      <div className="post-wrap" key={post.id}>
        <Post {...post} />
      </div>
    ))}

  </section>
);
    }

const preparedDataType = PropTypes.arrayOf({
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: userType.isRequired,
  comments: PropTypes.arrayOf(commentType),
});

PostList.propTypes = {
  preparedData: preparedDataType.isRequired,
};

PostList.defaultProp = {
  comments: [],
};
