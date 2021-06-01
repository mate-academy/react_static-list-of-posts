import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Post } from '../post';

export const PostList = ({ list }) => {
  const classes = useStyles();

  return (
    <ul className={classes.posts}>
      {list.map(postContent => (
        <li key={postContent.id} className={classes.post}>
          <Post {...postContent} />
        </li>
      ))}
    </ul>
  );
};

PostList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })),
};

PostList.defaultProps = {
  list: [],
};

const useStyles = makeStyles({
  posts: {
    height: 'auto',
    listStyle: 'none',
  },
});
