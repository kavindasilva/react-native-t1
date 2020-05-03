import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import Login from "./src/login/login"
import Routes from "./src/router";

import SideMenu from "react-native-side-menu";
import SideMenuContent from "./src/sideBar/sideMenu"

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});


class Application extends React.Component {
  render() {
    // const menu = <SideMenuContent navigator={navigator}/>;
    const menu = <SideMenuContent navigator={navigator} onItemSelected={ (cc)=>console.log("dd") } />;

    return (
      <SideMenu menu={menu}>
        {/* <ContentView/> */}
        <Routes />
      </SideMenu>
    );
  }
}

export default function App(){
  // return <Login />
  // return <Routes />
  return <Application />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
