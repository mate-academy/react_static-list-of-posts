import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CommentType } from './CommentType';
import './Comment.css';

export const Comment = ({ name, body, email }) => (
  <Card className="comment" variant="outlined">
    <Typography variant="h6" component="h7">
      {name}
    </Typography>
    <Typography variant="body2" component="p">
      {body}
    </Typography>
    <Typography
      className="title"
      color="textSecondary"
      gutterBottom
    >
      {`Author: ${email}`}
    </Typography>
  </Card>
);

Comment.propTypes = CommentType;
