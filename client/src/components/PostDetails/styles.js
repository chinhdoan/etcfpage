import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  body:{
    width:'100%'
  },
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '600px',

  },
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  section: {
    
    overflowWrap: 'break-word',
    width: '200px',
    objectFit: 'cover',
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
  },
  imageSection: {
    width:'40%',
    marginLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    },
    padding:'20px'
  },
  loadingPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '15px',
    height: '39vh',
  },
  commentsOuterContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    padding:'10px'
  },
  commentsInnerContainer: {
    height: '200px',
    overflowY: 'auto',
    marginRight: '30px',
    objectFit: 'cover',
    width: '100%',
  },
}));