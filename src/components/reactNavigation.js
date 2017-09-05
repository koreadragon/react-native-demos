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
import {StackNavigator} from 'react-navigation'; 


class HomeScreen extends Component{
	static navigationOptions = {
		title:'Welcome',
	};

	render(){
		const {navigate} = this.props.navigation;

		return (

			<View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
				<Text>Hello ,Chat App!</Text>
				<Button onPress={() => navigate('Chat')}
				title='contact Lucy'
				></Button>
			</View>

		);

	}
}

class ChatLucy extends Component{
	static navigationOptions = {
		title:'Hello,Lucy!',
	}
	render(){
		return (
			<View  style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
				<Text style={{fontWeight:'bold'}}>chatting with Lucy</Text>
			</View>

		);
	}
}






const SimpleApp = StackNavigator({
	Home:{screen:HomeScreen},
	Chat:{screen:ChatLucy}
});

export default SimpleApp;