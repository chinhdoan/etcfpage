
import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { gapi } from 'gapi-script';
import LoginIcon from '@mui/icons-material/Login';
import FolderSharedIcon from '@mui/icons-material/FolderShared';

import Ytsubcribe from '../Etcheck/Etcheck';
import decode from 'jwt-decode';
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';
import etcf from '../../images/etcflogo.png';
import barimg from '../../images/cover.gif';
import { ToastContainer, toast } from 'react-toastify';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import stars from '../../audio/CountingStars.mp3';
import PlayIcon from '@mui/icons-material/PlayCircle';
const Navbar = () => 
{
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const logout = () => {
        dispatch({ type: actionType.LOGOUT  });
        navigate('/');
        setUser(null);
    }
    let timeout = 2000
    function customalert() {
      toast.success("Directing...", {
        autoClose: timeout,
        toastId: 132
      })
    }
    let timeout2 = 1000
    function annouce() {
        toast.info("Playing: Counting Stars", {
          autoClose: timeout2,
          toastId: 132
        })
      }
    const exploration = () => {
            
    }
    //google login
    // useEffect(() => {
    //     return gapi.auth2  
    //             .load('https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest')
    //             .then(()=>{
    //             console.log('GAPI loaded successfully')
    //             },(error) => {
    //             console.log(error)
    //             })
    // }, []);
   


    useEffect(() => {
        const token = user?.token;
        if (token) {
          const decodedToken = decode(token);
    
          if (decodedToken.exp * 1000 < new Date().getTime()) {
            logout();
          }
        }
    
        setUser(JSON.parse(localStorage.getItem('profile')));
      }, [location]);

      const closetu = () => {
          
                const autoplay = document.getElementById('my_audio');
    
                autoplay.play();
                annouce();
             
  
      }

    return (
        <>
            {/* position: sticky || static */}
       
        <audio id="my_audio" src={stars}></audio>
        <div style={{display:'relative'}}>
             <div id="tt" style={{position:'relative',cursor: 'zoom-in'}}className={classes.barimg}>
                <PlayIcon id="ss" onClick={closetu} style={{color:'white',position:'absolute',width:'20px',height:'60px',cursor: 'pointer',marginLeft:'95%'}}/>
             </div>
        </div>
        <AppBar elevation={0} position="sticky"className={classes.appBarstick} color="inherit">
            <div className={classes.brandContainer}>
                <Link to="/">
                    <img className={classes.image} src={etcf} alt="etcf" height="90px"></img>
                </Link>
            </div> 
        </AppBar>
        <AppBar elevation={0}  position="static" className={classes.appBarstatic} color="inherit">

        <Toolbar className={classes.toolbar}>
            {user?.result ? (
                <> 
                    
                    <div className={classes.profile}>
                         <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageURL}>{user?.result.name.charAt(0)}</Avatar>   
                        
                        <Typography className={classes.userName} variant="h7">{user?.result.name}</Typography>
                         
                       
                       <Button className={classes.ffolder} onClick={customalert}startIcon={<FolderSharedIcon />} style={{marginTop:'5px',marginRight:'20px',color:'white',backgroundColor:'#a25d8d',width:'0px',height:'30px'}} href="https://commpu.herokuapp.com/mypc/" variant="contained" color="success">ME </Button>                      
                       <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                    </div> 
                  
                  </>   
                    
            ) : (
                <>
                    <Button component={Link} to="/register"  className={classes.more}startIcon={<LoginIcon />} style={{backgroundColor:'#23a4dc',color:'white',marginRight:'30px'}} variant="contained" color="primary">Sign In</Button>
                </>
            )}<ToastContainer />
        </Toolbar>
        </AppBar>
        
    </>
    
  );
};

export default Navbar;
