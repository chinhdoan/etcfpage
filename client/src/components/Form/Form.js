import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { useNavigate } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';

import { createPost, updatePost } from '../../actions/posts';
import useStyles from './styles';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ title: '', message: '', tags: [], selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const navigate = useNavigate();

  const clear = () => {
    setCurrentId(0);
    setPostData({ title: '', message: '', tags: [], selectedFile: '' });
  };

  useEffect(() => {
    if (!post?.title) clear();
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }, navigate));
      clear();
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
      clear();
    }
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper} elevation={1}>
        <Typography variant="h6" align="center">
          Please Sign In to engage in our team's activity.
        </Typography>
      </Paper>
    );
  }

  const handleAddChip = (tag) => {
    setPostData({ ...postData, tags: [...postData.tags, tag] });
  };

  const handleDeleteChip = (chipToDelete) => {
    setPostData({ ...postData, tags: postData.tags.filter((tag) => tag !== chipToDelete) });
  };

  return (
    <Paper className={classes.paper} elevation={1}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography style={{ padding: '0px 0',overflowWrap: 'break-word',objectFit: 'cover',}}variant="h6">{currentId ? `Editing "${post?._id}"` : 'Creating a document'}</Typography>
        <TextField style={{ padding: '0px 0',overflowWrap: 'break-word', objectFit: 'cover',}}name="title" variant="outlined" label="Title" fullWidth multiline rows={4} value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField style={{  padding: '0px 0',overflowWrap: 'break-word',objectFit: 'cover',}} name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField style={{ padding: '0px 0', width: '96%' }}  variant="outlined"multiline rows={4}name="tags"label="Tags" fullWidth
                   value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })}>
          <ChipInput
            style={{ overflowWrap: 'break-word',
            objectFit: 'cover'}}
            value={postData.tags}
            onAdd={(chip) => handleAddChip(chip)}
            onDelete={(chip) => handleDeleteChip(chip)}
          />
        </TextField>
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>CREATE</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;
