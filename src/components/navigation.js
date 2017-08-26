import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  Image,
  ListView,
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';

/*
1.设置路由对象
2.渲染配置
3.渲染场景
*/
class FirstView extends Component{
	pressPush(){
		var nextRoute={
			component:SecondView
		}
		this.props.navigator.push(nextRoute);
	}

	render(){
		return(

			<View style={[styles.flex,{backgroundColor:'yellow'}]}>
				<TouchableOpacity 
				onPress={this.pressPush.bind(this)}
				style={styles.button}
				>
					<Text>点击进入下一页</Text>
				</TouchableOpacity>
			</View>

		);
	}
}
class SecondView extends Component{
	pressPop(){
		this.props.navigator.pop();
	}

	render(){
		return(

			<View style={[styles.flex,{backgroundColor:'green'}]}>
				<TouchableOpacity 
				onPress={this.pressPop.bind(this)}
				style={styles.button}
				>
					<Text>点击返回上一页</Text>
				</TouchableOpacity>
			</View>

		);
	}
}


class MyNavigator extends Component{
 
	render(){

		var rootRoute={
			component:FirstView
		}


		return(

			<Navigator
				 
				initialRoute={rootRoute}
				 
				configureScene={(route) => {
					return Navigator.SceneConfigs.PushFromRight;
				}}
				 
				renderScene={(route,navigator) => {
					var GetSon= route.component;
					return(
						<GetSon 
						navigator={navigator}
						route={route}
						/>
					);
				}}
			 />
			

		);
	}
}

var styles = StyleSheet.create({
	flex:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
	},
	button:{
		width:150,
		height:30,
		borderColor:'#ff0',
		borderWidth:1,
		borderRadius:3,
		justifyContent:'center',
		alignItems:'center',
	}

})

 
export default MyNavigator;