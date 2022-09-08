import { Button } from '@material-ui/core';
import React from 'react';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { useNavigate } from 'react-router-dom';
const PageNotFound = () => {
  	const navigate = useNavigate()
    let loadingGif = require("../images/404page.gif")
    const homeTimeout = () => setTimeout( backtohome, 3000)
    const backtohome = () => {
      navigate('/')
    }
    return (
      <>
        <div alt="etcf"  style={{  backgroundImage: `url(${loadingGif})`,backgroundSize: '100%',backgroundRepeat: 'no-repeat',backgroundPosition: 'center', display: 'relative', height: '100vh', width: '100%' }} >
        <Button onClick={homeTimeout} variant="outlined" endIcon={<KeyboardReturnIcon />}  color="error" style={{ display: 'absolute', height: '100vh', size:'30px' ,color:'red', width: '100%' }}> <strike>Bạn đang đi lạc, lối về ở ngay đây</strike><br></br>Safe me</Button>
          
        </div>
    </>
  )
}

export default PageNotFound