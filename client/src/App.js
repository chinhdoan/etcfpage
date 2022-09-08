import React, { useEffect } from 'react';
import {Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { gapi } from 'gapi-script'
import { REQ } from './constants/actionTypes';
import PageNotFound from './PageNotFound/PageNotFound';
import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';
import Posts from './components/Posts/Posts';
import Etcheck from './components/Etcheck/Etcheck';
const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  
  return (
    <BrowserRouter>
      <Container style={{padding: '0'}} maxWidth="xl"> 
        <Routes>  
          <Route path="/" exact element={<Etcheck />} />
          <Route path="/read" exact  element={<Home/>} />
          <Route path="/posts/search"   element={<Home />} />
          <Route path="/posts/:id" exact element={<PostDetails />} /> 
          {/* <Route path={['/creators/:name', '/tags/:name']}  element={<CreatorOrTag /} /> */}
          <Route path='/tags/:name' exact  element={<CreatorOrTag />} />
          <Route path='/creators/:name' exact  element={<CreatorOrTag />} />  
          <Route path="/register" exact  element={!user ? <Auth /> : <Navigate to={<Home/>}/>} />
          <Route path="*"exact element={<PageNotFound />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );

}

export default App;
