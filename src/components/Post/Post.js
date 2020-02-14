import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import { Comments } from '../Comments/Comments';

import './Post.css';

export const Post = (props) => {
  const {
    text,
    title,
    author,
    emailAuthor,
    address,
    idx,
    commentsList,
  } = props;

  return (
    <div className="card text-white bg-primary">
      <User author={author} email={emailAuthor} address={address} />
      <div className="card-body">
        <h4 className="card-title">{`#${idx} ${title}`}</h4>
        <p className="card-text">{text}</p>
      </div>
      <h4 className="card-title">Comments:</h4>
      <ul className="list-group">
        {commentsList.map(({ name, id, postId, body, email }) => (
          <Comments
            key={`${name}-${id}-${postId}`}
            body={body}
            commentAuthor={name}
            commentEmail={email}
          />
        ))}
      </ul>
    </div>
  );
};

Post.propTypes = {
  commentsList: PropTypes.arrayOf(
    PropTypes.shape({
      body: PropTypes.string,
      name: PropTypes.string,
      email: PropTypes.string,
    }),
  ),
  text: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  emailAuthor: PropTypes.string,
  idx: PropTypes.number,
  address: PropTypes.string,
};

Post.defaultProps = {
  commentsList: [],
  text: '',
  title: '',
  author: '',
  emailAuthor: '',
  idx: 0,
  address: '',
};
