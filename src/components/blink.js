
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Blink extends Component{
	constructor(props){
		super(props);
		this.state={
			show:true,
			time:'',
			pass:this.props.pass,
		}
	}

	render(){
		 
		return (
			<View style={{flex:1}}>
				<Text style={styles.pass}>我是传来的值：{this.props.pass}</Text>
				<View style={styles.container}>
			        <View style={[styles.content,{  backgroundColor: 'powderblue'}]} />
			        <View style={[styles.content,{  backgroundColor: 'skyblue'}]} />
			        <View style={[styles.content,{  backgroundColor: 'steelblue'}]} />
	     		 </View>
			</View>
			
		);
	}
}

let styles = StyleSheet.create({
	container:{
		flex: 1,
		marginTop:20,

		/*
		在组件的style中指定flexDirection可以决定布局的主轴。然后子元素沿着主轴排列，默认值是竖直轴(column)方向。
        注意子元素排列出的效果，初学者很容易搞反*/
        flexDirection: 'row',/*主轴*/
        justifyContent: 'center',/*子元素沿主轴排列方式*/
        alignItems: 'center',/*子元素沿次轴（与主轴垂直）排列方式*/
       
		 
	},
	content:{	
		flex:1,
		height:50,
		borderTopWidth:1,
		borderTopColor:'limegreen',
		borderBottomWidth:1,
		borderBottomColor:'silver'
		 

	},
	pass:{
		marginTop:64,
		backgroundColor:'black',
		height:64,
		fontSize:15,
		color:'white',
		textAlign:'center',
		fontWeight:'bold'

	}
})

export default Blink;