import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CommentType } from './CommentType';

export const Comment = ({ name, body, email }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h6" component="h4">
          {name}
        </Typography>
        <Typography variant="body2" component="p">
          {body}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {`Author: ${email}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

Comment.propTypes = CommentType;

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
});
