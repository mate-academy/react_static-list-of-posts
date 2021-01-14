import React from 'react';
import './Post.scss';
import PropTypes from 'prop-types';
import User from '../User';
import CommentList from '../CommentList';
import { CommentShape, UserShape } from '../../Types';

const Post = ({ users, comments, id, title, body }) => (
  <>
    <div className="post">
      <div>
        Post ID:
        {' '}
        <strong>
          {id}
        </strong>
      </div>
      <span>
        Post name:
        {' '}
        {title}
      </span>
      <User {...users} />
      <h3 className="text-center">{title}</h3>
      <p className="postBody">{body}</p>
      <CommentList commentsData={comments} />
    </div>
  </>
);

Post.propTypes = {
  users: PropTypes.objectOf(UserShape).isRequired,
  comments: PropTypes.arrayOf(CommentShape).isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Post;
