import { makeStyles } from '@material-ui/core/styles';
import Image from '../../images/cover2.gif';
export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    overflow: 'hidden',
  },
  paper: {
    padding: theme.spacing(2),
    backgroundImage: `url(${Image})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
   
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
   
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor:'#23a4dc'
    
  },
}));