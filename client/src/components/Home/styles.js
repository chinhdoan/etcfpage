import { makeStyles } from '@material-ui/core/styles';
import Image from '../../images/cover2.gif';
import Image2 from '../../images/cover4.gif';
import Image3 from '../../images/violet.gif';
export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
    backgroundImage: `url(${Image2})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
    backgroundImage: `url(${Image3})`,
    backgroundSize: '100% 150%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'contain',
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
    
  },

}));