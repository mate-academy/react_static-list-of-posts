import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import CommentList from './CommentList';

const Post = ({ itemObj }) => (
  <section className="post__section">
    <h2 className="post__title">
      {itemObj.title}
    </h2>
    <p className="post__body">
      {itemObj.body}
    </p>
    <User person={itemObj.user} />
    <hr className="line" />
    <h3 className="post__comments">Comments:</h3>
    <CommentList comment={itemObj.comment} />
  </section>
);

Post.propTypes = { itemObj: PropTypes.objectOf.isRequired };

export default Post;
