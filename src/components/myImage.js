import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';



function HanImage(){
	return (
		<View style={styles.container}>
			<View style={styles.net}>
				<Image
				style={styles.netImage}
				source={{
					uri:'http://facebook.github.io/react/img/logo_og.png'
				}}
				 />
			</View>
			<View style={styles.local}>
				<Image
				 style={styles.localImage} 
				 source={require('./hanImg.png')}
				 />
			</View>
		</View>
	);
}

var styles = StyleSheet.create({

	container:{
		flex:1,
		margin:25,
		alignItems:'center'
	},
	net:{
		marginTop:30,
		width:300,
		height:240,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'cyan'
	},
	netImage:{
		width:200,
		height:200,
		backgroundColor:'gray'
	},
	local:{
		marginTop:30,
		width:300,
		height:200,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'yellow'
	},
	localImage:{
		width:180,
		height:100,
		backgroundColor:'gray'
	}
});

export default HanImage;