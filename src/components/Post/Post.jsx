import React from 'react';
import { Comments } from '../Comments';
import './post.scss';
import PropTypes from 'prop-types';

export const Post = ({author, title, body, comments}) => (
  <>
    <div className="Post">
      <h2>{title}</h2>
      <p>{body}</p>
      <p>{author.name} / {author.email} / {author.address.city} {author.address.street} {author.address.suite}</p>
    </div>
    <div className="Comments">
    {comments.map(item => (
        <div key={item.id}>
          <Comments {...item} />
        </div>
      ))}
    </div>
  </>
);

Post.propTypes = {
  author: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
}
