

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  FlatList,
  Button

} from 'react-native';
 
import {StackNavigator,TabNavigator,DrawerNavigator} from 'react-navigation'; 

/*drawer*/
class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./han.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
    	 <View style={styles.sideViewButton}>
	      <Button 
	       
	        onPress={() => this.props.navigation.navigate('Notifications')}
	        title="Go to notifications"
	      />
      </View>
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./han.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <View style={styles.sideViewButton}>
      	<Button
      	
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
	sideViewButton:{
		marginTop:64,
	},
	  icon: {
	    width: 24,
	    height: 24,
	  },
});

const routeConfig = {
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
};
const drawNavigationConfig = {
 
	drawerPosition:'left',
}

const App = DrawerNavigator(routeConfig,drawNavigationConfig);




export default App;