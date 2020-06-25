import React from 'react';
import PropTypes from 'prop-types';
import comments from '../../api/comments';
import styles from './CommentList.module.css';

const CommentList = ({ id }) => {
  const list = comments.filter(comment => comment.postId === id);

  return (
    <ul className={styles.commentList}>
      <h3>Comments:</h3>
      {
        list.map(comment => (
          <li className={styles.commentList__item}>
            <h4>{comment.name}</h4>
            <p>{comment.body}</p>
            <span>{comment.email}</span>
          </li>
        ))
      }
    </ul>
  );
};

CommentList.propTypes = {
  id: PropTypes.number.isRequired,
};

export default CommentList;
