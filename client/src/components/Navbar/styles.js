import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
import barimg from '../../images/cover.gif';

export default makeStyles((theme) => ({
  body:{
    overflowY: 'hidden',
  },
  barimg:{
    overflow: 'hidden',
    width:'100%',
    height: '155px',
    objectFit: 'cover',
    transition: 'transform 2s ease-in-out',
    backgroundImage: `url(${barimg})`,
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    "&:hover": {
      transform: 'scale(1)',
      width:'100% 100%',
      position: 'center',
      objectFit: 'fill',
      height: '90vh',
    },
  },
  appBarstatic: {

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'end',
    alignItems: 'center',
    backgroundColor: 'transparent',
    
  },
  appBarstick:{
    marginTop: '-150px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  heading: {
    color: '#e8eeee',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '0px',
    height: '120px',
    width:"150px",
    opacity:'0.7',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '600px',
    marginTop:'0',
    float:'right',
    marginTop:'40px'
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '35  0px',
     transform: 'translate(15px,0)', 
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    fontSize:'15px',  
    marginLeft:'10px',
    marginRight:'10px',
    color:'#9142bd'
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[400],
  },
  logout:{
    marginTop:'5px',
    height:'30px',
    backgroundColor:'#a25d8d',
  
  },

}));