import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { getPost, getPostsBySearch } from '../../actions/posts';
import CommentSection from './CommentSection';
import useStyles from './styles';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import IconButton from '@mui/material/IconButton';
const Post = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  useEffect(() => {
    if (post) {
      dispatch(getPostsBySearch({ search: 'none', tags: post?.tags.join(',') }));
    }
  }, [post]);

  if (!post) return null;

  const openPost = (_id) => navigate(`/posts/${_id}`);

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);
 
  
  return (
    <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
    <IconButton component={Link} to="/read" aria-label="delete">
      <KeyboardReturnIcon />
    </IconButton>
      <div className={classes.card}>
        <div style={{ width:'100%'}} className={classes.section}>
          <Typography variant="h3" component="h2">{post.title}</Typography>
          <Typography gutterBottom variant="h6" component="h2">{post.tags.map((tag) => (
            <Link to={`/tags/${tag}`} style={{ textDecoration: 'none', color: '#999999' }}>
              {` #${tag} `}
            </Link>
          ))}
          </Typography>
          <hr></hr>
         <Typography gutterBottom variant="body1" component="p" dangerouslySetInnerHTML={{__html: post.message}}></Typography>
          <Typography variant="h6">
            Created by:
            <Link to={`/creators/${post.name}`} style={{ textDecoration: 'none', color: '#3f51b5' }}>
              {` ${post.name}`}
            </Link>
            <Typography variant="body1">({moment(post.createdAt).fromNow()})  </Typography>
          </Typography>
          <Divider style={{ margin: '20px 0' }} />
          {/* <Typography variant="body1"><strong>Update coming soon!</strong></Typography> */}
          <Divider style={{ margin: '20px 0' }} />
          <CommentSection post={post} />
          <Divider style={{margin: '20px 0' }} />
        </div>
        <div className={classes.imageSection}>
          <img className={classes.media} src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
        </div>
      </div>
      {!!recommendedPosts.length && (
        <div className={classes.section}>
          <Typography gutterBottom variant="h6"><b>You might also like:</b></Typography>
          <Divider />
          <div className={classes.recommendedPosts}>
            {recommendedPosts.map(({ title, name, message, likes, selectedFile, _id }) => (
              <div style={{ width:'200px', cursor: 'pointer' }} onClick={() => openPost(_id)} key={_id}>
                <Typography  gutterBottom variant="h6"><b>Title: </b><ins>{title}</ins></Typography>
                <Typography  gutterBottom variant="subtitle2"><b>Author: </b><ins>{name}</ins></Typography>
                <Typography  gutterBottom variant="subtitle1"><b>Like: </b> {likes.length}</Typography>
                <img src={selectedFile} width="150px" />
              </div>
            ))}
          </div>
        </div>
      )}
    </Paper>
  );
};

export default Post;