import React, {useContext, useEffect}from 'react'
import { Button } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import {gapi} from 'gapi-script';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useStyle from './Styles'
import cdmb from '../../images/cdmb.jpg'
import et from '../../images/et.jpg'
import skipper from '../../images/skipper.jpg'
import { REQ } from '../../constants/actionTypes';

const Etcheck = () => {

  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.auth2.init({clientId: REQ} )
    })
  }, [])
  

    const classes = useStyle();
    const navigate = useNavigate();
    let id = '';
    function authenticate() {
      return  gapi.auth2
      .getAuthInstance()
      .signIn()
      .then(
        function() {
          console.log("Sign-in successful");
        },
        function(error) {
          alert('Please clear browser data and try again.')
        }
        );
    }

    function loadClient() {
      gapi.client.setApiKey('AIzaSyBmdDmpyJcy3F2hmxLh9bN8a7LK7BGxbmk');
      return gapi.client
      .load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
      .then(
          function() {

          },
          function(error) {
            alert('Please clear your browser history and try again.')
          }
      );
  }

  function subscribe() {
      const channelId = 'UCr2Saae4I0-qI0z4YViZ_Ng';
      return gapi.client.youtube.subscriptions
      .insert({
          part: "snippet",
          resource: {
            snippet: {
                resourceId: {
                  kind: "youtube#channel",
                  channelId: channelId
                }
            }
          }
      },navigate('/read'))
      .then(
          function(response) {         
            let timeout = 3000
            function infoalert() {
              toast.success(`welcome ${response.result.snippet.title}`, {
                autoClose: timeout,
                toastId: 123
              })
            }
            infoalert()
          // Handle the results here (response.result has the parsed body).
          console.log("Response", response);

          },
          function(error) {
            // console.error("Execute error", error);
          }
 
      );  
  }
  let timeout = 2000
  function customalert() {
    toast.success("Checking...", {
      autoClose: timeout,
      toastId: 123
    })
  }
  const faces = [
    cdmb,
    et,
    skipper
  ];
  return (
    <> 
      {/* <div id="block" style="
      width: 300px;
        text-align:center;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-self:center;
      " class="card" style="overflow-wrap: break-word;">
          <h1  class="card-body">
            <h4 class="h1 card-title">EagleTeam <h6> ANNOUNCEMENT</h6></h4>
            <p role="alert" class="h5 alert alert-danger card-text ">Vui lòng xác nhận bạn là thành viên của Eagle.Team trước khi truy cập!<br></p>
              <p class="h7">Bạn cần đồng ý yêu cầu trên. Hành động này nhằm tránh sự nhầm lẫn giữa các thành viên khác.</p>
            <button onclick="authenticate().then(loadClient).then(subscribe)" class="btn btn-success">Đồng ý</button>
          </h1>
        </div> --> */}
         <div className="App">
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={
                  "https://wallpapercave.com/dwp1x/wp10612990.jpg"
                }
              />
              <CardContent className={classes.content}>
                <Typography
                  className={"MuiTypography--heading"}
                  variant={"h7"}
                  gutterBottom
                >
                    TRUY CẬP ĐẾN EAGLETEAM
                </Typography>
                <br></br>
                <Typography
                  className={"MuiTypography--subheading"}
                  variant={"caption"}
                >
                  <b>Vui lòng xác nhận danh tính để tiếp tục! </b>
                  Điều này giúp tránh không nhằm lẫn bạn với những người khác.
                </Typography>

                <Button style={{backgroundColor:'#23a4dc',width:'100px',height:'30px', textAlign: 'right'}} onClick={()=> {authenticate().then(loadClient).then(subscribe); customalert()}} color="primary" variant="contained">Đồng ý</Button>
                <Divider className={classes.divider} light />
                {faces.map(face => (
                  <Avatar className={classes.avatar} key={face} src={face} />
                ))}
              </CardContent>
              <ToastContainer />
            </Card>
    </div>
          
   
        
    </>
   
      
  
  )
}

export default Etcheck