import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import CommentList from './CommentList';

const Post = ({ id, title, body, user, comments }) => (
  <article className="post">
    <div className="post__container">
      <article className="post__information">
        <p className="post__number">{`Post ${id}:`}</p>
        <h2 className="post__title">{title}</h2>
        <p className="post__content">{body}</p>
      </article>

      <User {...user} />
    </div>

    <CommentList list={comments} />
  </article>
);

Post.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.object,
  }),
  comments: PropTypes.arrayOf(
    PropTypes.object
  ),
};

Post.defaultProps = {
  id: null,
  title: 'No title',
  body: 'No content',
  user: 'No user',
  comments: 'No comments',
};

export default Post;
