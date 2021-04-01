import React from 'react';
import { CommentList } from '../CommentList';
import './post.scss';
import PropTypes from 'prop-types';
import { User } from '../User'
import { userType} from '../User'
import { commentType } from '../Comment'

export const Post = ({author, title, body, comments}) => (
  <>
    <div className="Post">
      <h2>{title}</h2>
      <p>{body}</p>
      <div>
        <User {...author}/>
      </div>
    </div>
    <CommentList allComments={comments} />
  </>
);

Post.propTypes = {
  author: userType,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(commentType),
}
