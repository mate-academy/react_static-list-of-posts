import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { CommentSection } from '../commentSection';
import { CommentType } from '../comment/CommentType';
import './Post.css';

export const Post = ({ title, author, body, comments }) => (
  <Card className="card" variant="outlined">
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
    <CommentSection commentList={comments} />
  </Card>
);

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
