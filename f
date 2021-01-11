[1mdiff --git a/src/components/Comment/Comment.jsx b/src/components/Comment/Comment.jsx[m
[1mindex 58c37d3..70c6ce5 100644[m
[1m--- a/src/components/Comment/Comment.jsx[m
[1m+++ b/src/components/Comment/Comment.jsx[m
[36m@@ -2,7 +2,11 @@[m [mimport React from 'react';[m
 import PropTypes from 'prop-types';[m
 [m
 export const Comment = ({ cmts }) => ([m
[31m-  <h4>Comment</h4>[m
[32m+[m[32m  <>[m
[32m+[m[32m    <span>{cmts.name}</span> <br />[m
[32m+[m[32m    <span>{cmts.body}</span> <br />[m
[32m+[m[32m    <span>{cmts.email}</span> <br /> <br /> <br />[m
[32m+[m[32m  </>[m
 );[m
 [m
 Comment.propTypes = {[m
[1mdiff --git a/src/components/CommentList/CommentList.jsx b/src/components/CommentList/CommentList.jsx[m
[1mindex 7da8084..2d0dd47 100644[m
[1m--- a/src/components/CommentList/CommentList.jsx[m
[1m+++ b/src/components/CommentList/CommentList.jsx[m
[36m@@ -4,8 +4,7 @@[m [mimport { Comment } from '../Comment';[m
 [m
 export const CommentList = ({ cmts }) => ([m
   <>[m
[31m-    <h3>Comment list</h3>[m
[31m-[m
[32m+[m[32m    <h5 className="comments">Comments</h5>[m
     {cmts.map(cmt => ([m
       <Comment[m
         key={cmt.id}[m
[1mdiff --git a/src/components/Post/Post.jsx b/src/components/Post/Post.jsx[m
[1mindex 0884926..28d0f08 100644[m
[1m--- a/src/components/Post/Post.jsx[m
[1m+++ b/src/components/Post/Post.jsx[m
[36m@@ -9,6 +9,7 @@[m [mexport const Post = ({ user, cmts, body, title }) => ([m
     <User[m
       {...user}[m
     />[m
[32m+[m[41m    [m
     <p>{body}</p>[m
     <CommentList[m
       cmts={cmts}[m
[1mdiff --git a/src/components/PostList/PostList.jsx b/src/components/PostList/PostList.jsx[m
[1mindex c7c6433..0d3db88 100644[m
[1m--- a/src/components/PostList/PostList.jsx[m
[1m+++ b/src/components/PostList/PostList.jsx[m
[36m@@ -6,7 +6,7 @@[m [mexport function PostList({ objPosts }) {[m
   return ([m
     <>[m
       {objPosts.map(post => ([m
[31m-        <Post[m
[32m+[m[32m        <Post className="Post"[m
           key={post.id}[m
           {...post}[m
         />[m
[1mdiff --git a/src/components/User/User.jsx b/src/components/User/User.jsx[m
[1mindex 6cd176e..d3eb279 100644[m
[1m--- a/src/components/User/User.jsx[m
[1m+++ b/src/components/User/User.jsx[m
[36m@@ -2,7 +2,11 @@[m [mimport React from 'react';[m
 import PropTypes from 'prop-types';[m
 [m
 export const User = ({ name, email, address }) => ([m
[31m-  <h3>User</h3>[m
[32m+[m[32m  <>[m
[32m+[m[32m    <span className="user_name">{name}</span> <br />[m
[32m+[m[32m    Email: <span className="user_email">{email}</span> <br />[m
[32m+[m[32m    City: <span className="user_city">{address.city}</span>[m
[32m+[m[32m  </>[m
 );[m
 [m
 User.propTypes = {[m
