import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// You can import from local files
import FBScreen from './screens/in';
import INSTScreen from './screens/fb';

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Appcontainer />
      </View>
    )
  }
}

const tabContainer = createBottomTabNavigator({
Instagram : {
  screen : FBScreen,
},
Facebook : {
  screen : INSTScreen,
}
})
const Appcontainer = createAppContainer(tabContainer);