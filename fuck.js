import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Header from './header';

class FuckYouIfYouStillCanNotAppear extends Component{

	constructor(props){
		super(props);
		this.state={
			inputText:'',

		}
		this.getContent = this.getContent.bind(this);
		this.onSearch = this.onSearch.bind(this);
	}
	/*输入框的onChange事件*/
	getContent(text){
		this.setState({
			inputText:text
		});
	}
	onSearch(){
		alert(this.state.inputText);
	}
	render(){
		return(
		<View style={styles.container}>
			 
			<View style={styles.flex}>
				<TextInput
				 placeholder=' search what you interested'
				 style={styles.input}
				 returnKeyType='search'
				 onChangeText={this.getContent}
				/>
			</View>
			<TouchableOpacity 
				style = {styles.button}
				onPress={this.onSearch}>
				<Text style={styles.search}>搜索</Text>
			</TouchableOpacity>
		</View>

	)
	}
	
}
var styles = StyleSheet.create({

	container:{
		flexDirection:'row',
		height:45,
		marginTop:25,
	},
	flex:{
		flex:1
	},
	input:{
		height:45,
		borderWidth:1,
		marginLeft:5,
		borderColor:'#ccc',
		borderRadius:4
	},
	button:{
		width:55,
		marginLeft:5,
		marginRight:5,
		backgroundColor:'#23beff',
		height:45,
		justifyContent:'center',
		alignItems:'center',
		borderColor:'#f00',
		borderRadius:4
	},
	search:{
		color:'#fff',
		fontSize:15,
		fontWeight:'bold'
	}
});


export default FuckYouIfYouStillCanNotAppear;