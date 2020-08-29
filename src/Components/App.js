import React from "react";
import '../Styles/App.css'
import { Container,Row,Col } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import CreatePost from "./CreatePost";
import Home from './Home'
import MyPosts from './MyPosts'
import Profile from './Profile'
import Folks from './Folks'
import FindHandles from './FindHandles'


export default function App() {
  return (

    <Router>
      <div>
        <Container className="flex-css">
          <div>
            <Link to="/" style = {{color : "blueViolet",fontFamily : "cursive"}}>Home</Link>
          </div>
          <div>
            <Link to="/CreatePost" style = {{color : "blueViolet",fontFamily : "cursive"}}>Create Post</Link>
          </div>
          <div>
            <Link to="/MyPost" style = {{color : "blueViolet",fontFamily : "cursive"}}>MyPost</Link>
          </div>
          <div>
            <Link to="/Profile" style = {{color : "blueViolet",fontFamily : "cursive"}}>Profile</Link>
          </div>
        </Container>

        <hr />

        <Switch>
          
            <Route exact path="/">
              <Container>
                <Row>
                  <Col lg={3}><FindHandles /></Col>
                  <Col lg={6}><Home /></Col>
                  <Col lg={3}><Folks /></Col>
                </Row>
              </Container>
            </Route>
            <Route path="/CreatePost">
              <Container>
                <Row>
                  <Col lg={3}><FindHandles /></Col>
                  <Col lg={6}><CreatePost /></Col>
                  <Col lg={3}><Folks /></Col>
                </Row>
              </Container>
            </Route>
            <Route path="/MyPost">
              <Container>
                <Row>
                  <Col lg={3}><FindHandles /></Col>
                  <Col lg={6}><MyPosts /></Col>
                  <Col lg={3}><Folks /></Col>
                </Row>
              </Container>
            </Route>
            <Route path="/Profile">
              <Container>
                <Row>
                  <Col lg={3}><FindHandles /></Col>
                  <Col lg={6}><Profile /></Col>
                  <Col lg={3}><Folks /></Col>
                </Row>
              </Container>
            </Route>
        </Switch>
      </div>
    </Router>
  );
}
