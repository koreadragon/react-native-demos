import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  RefreshControl
} from 'react-native';


class Movie extends Component{


	_onScrollBeginDrag(){
		console.log('开始拖拽')
	}
	_onScrollEndDrag(){
		console.log('结束拖拽')
	}
	_onMomentumScrollBegin(){
		console.log('开始滚动')
	}
	_onMomentumScrollEnd(){
		console.log('滑动结束')
	}
	_onRefresh(){
		console.log('刷新666')
	}






	render(){

		return(
			<View style={styles.container}>
				<ScrollView
				 style={styles.scrollView}
				 showsVerticalScrollIndicator={true}
				 onScrollBeginDrag = {this._onScrollBeginDrag}
				 onScrollEndDrag = {this._onScrollEndDrag}
				 onMomentumScrollBegin = {this._onMomentumScrollBegin}
				 onMomentumScrollEnd = {this._onMomentumScrollEnd}
				 refreshControl={
				 	<RefreshControl 
				 		refreshing={false}
				 		tintColor='#ccc'
				 		title='loading...'
				 		onRefresh={this._onRefresh}
				 	/>
				 }
				>
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
		backgroundColor:'orange'
	},
	scrollView:{
		marginTop:25,
		backgroundColor:'#fff',
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