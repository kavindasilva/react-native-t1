import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from '../src/home/home'
import Login from '../src/login/login'
import About from '../src/home/about'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "login" component = {Login}  initial = {true} />
         <Scene key = "home" component = {Home}  initial = {false} />
         <Scene key = "about" component = {About}  />
      </Scene>
   </Router>
)

export default Routes
