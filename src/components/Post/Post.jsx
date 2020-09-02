import React from 'react';
import PropTypes from 'prop-types';
import './Post.scss';
import { CommentList } from '../CommentList';
import { User } from '../User';

export const Post = ({ title, body, comments, user }) => (
  <>
    <div className="post">
      <div className="postBlock">
        <div>
          <h2 className="postName">{title}</h2>
          <p className="postBody">{body}</p>
        </div>
        <User {...user} />
      </div>
    </div>

    <CommentList commentss={comments} />
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};
