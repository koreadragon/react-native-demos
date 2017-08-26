import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  ListView,
  Image
} from 'react-native';

let someNews = [
'金三胖','特朗普发推','习大大万岁!'
,'奥巴马','希拉里!'
,'纽约','约克郡!'
,'惠灵顿','悉尼!'
,'韩国首尔','武汉!'
,'西安','北京'
,'朝鲜','南京'
,'特朗普发推','习大大万岁!'
,'特朗普发推','习大大万岁!'
]; 


/*
与iOS类似，有header,section,
使用ListView.DataSource,传递数据源
ListView实现：row/section 组件定义，设置数据
将DataSource对象设置为state属性
*/
class MyListView extends Component{

	constructor(props){
		super(props);

		var ds = new ListView.DataSource({
			/*通过判断决定渲染哪些行组件，避免全部渲染影响效率*/
			rowHasChanged:(oldRow,newRow) =>  
			oldRow !== newRow
		});
		this.state={
			/*设置dataSource时不直接使用原始数据，使用拷贝份*/
			dataSource:ds.cloneWithRows(someNews)
		}
	}
	_renderRow(rowData:string){
		return(
			<View style={styles.row}>
				<Text style={styles.content}>{rowData}</Text>
			</View>


		);
	}

	render(){
		return(

			<ListView
			style={styles.container}
			dataSource={this.state.dataSource}
			renderRow={this._renderRow}
			 />

		);
	}


}

var styles = StyleSheet.create({
	container:{
		flex:1,
		 marginTop:25,
	},
	row:{
		justifyContent:'center',
		alignItems:'center',
		padding:5,
		height:100,
		borderBottomWidth:1,
		borderColor:'#cccccc'
	},
	content:{
		flex:1,
		fontSize:20,
		color:'#00f',
		lineHeight:100
	} 
});


export default MyListView;