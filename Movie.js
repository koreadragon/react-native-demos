import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';


class Movie extends Component{
	render(){

		return(
			<View style={styles.container}>
				<ScrollView style={styles.scrollView}>
					<View style={styles.view_1}></View>
					<View style={styles.view_2}></View>
					<View style={styles.view_3}></View>
				</ScrollView>
			</View>	

		)	

	}
		
	
}

var styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'cyan'
	},
	scrollView:{
		marginTop:25,
		backgroundColor:'#cccccc',
	},
	font:{
		fontSize:25,
		fontWeight:'bold',
		textAlign:'center',
	},
	view_1:{
		margin:15,
		flex:1,
		height:300,
		backgroundColor:'yellow'
	},
	view_2:{
		margin:15,
		flex:1,
		height:300,
		backgroundColor:'green'
	},
	view_3:{
		margin:15,
		flex:1,
		height:300,
		backgroundColor:'red'
	},
})



export default Movie;