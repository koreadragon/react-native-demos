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
	 static navigationOptions = ({ navigation }) => {
	  const {state, setParams} = navigation;
	  const isInfo = state.params.mode === 'info';
	  const {user} = state.params;
	  return {
			    title: isInfo ? `${user}'s Contact Info` : `Chat with ${state.params.user}`,
			    headerRight: (
			      <Button
			        title={isInfo ? 'Done' : `${user}'s info`}
			        onPress={() => setParams({ mode: isInfo ? 'none' : 'info'})}
			      />
			    ),
			  };
		};

	render(){
		return (
			<View  style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
				<Text style={{fontWeight:'bold'}}>{this.props.navigation.state.params.user}</Text>
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
				  title="Go"
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
				  title="Go"
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