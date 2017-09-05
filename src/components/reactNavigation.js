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
import {StackNavigator,TabNavigator} from 'react-navigation'; 


class HomeScreen extends Component{
	static navigationOptions = {
		title:'Welcome',
	};

	render(){
		const {navigate} = this.props.navigation;

		return (

			<View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
				<Text>Hello ,Chat App!</Text>
				<Button onPress={() => navigate('Chat',{user:'Lucy'})}
				title='contact Lucy'
				></Button>
			</View>

		);

	}
}

class ChatLucy extends Component{
	static navigationOptions =({navigation})=> ({
		title:`Chat with ${navigation.state.params.user}`,
	})
	render(){
		return (
			<View  style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
				<Text style={{fontWeight:'bold'}}>chatting with Lucy</Text>
			</View>

		);
	}
}


class RecentChatsScreen extends React.Component {
  render() {
    return 	<View>
    			<Text>List of recent chats</Text>
		 	   <Button
				  onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
				  title="Chat with Lucy"
				/>
    		</View>
  }
}

class AllContactsScreen extends React.Component {
  render() {
    return 	<View>
    			<Text>List of all chats</Text>
		 	   <Button
				  onPress={() => this.props.navigation.navigate('Chat', { user: 'Jane' })}
				  title="Chat with Jane"
				/>
    		</View>
  }
}

const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});

MainScreenNavigator.navigationOptions = {
	title:'My chats'
}




const SimpleApp = StackNavigator({
	Home:{screen:MainScreenNavigator},
	Chat:{screen:ChatLucy}
});

export default SimpleApp;