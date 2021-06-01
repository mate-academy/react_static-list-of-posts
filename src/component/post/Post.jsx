import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { CommentSection } from '../commentSection';
import { CommentType } from '../comment/CommentType';

export const Post = ({ title, author, body, comments }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <Typography
          color="textSecondary"
          gutterBottom
        >
          {`Post writtent by: ${author.name}`}
        </Typography>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {body}
        </Typography>
      </CardContent>
      <CommentSection
        className={classes.comments}
        commentList={comments}
      />
    </Card>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  body: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(CommentType),
};

Post.defaultProps = {
  comments: [],
};

const useStyles = makeStyles({
  comments: {
    height: 'inherit',
  },

  card: {
    height: '200px',
    maxHeight: 'auto',
    overflow: 'auto',
    margin: '20px',
  },
});
