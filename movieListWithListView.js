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


/*从文件中读取数据,默认调用了JSON.parse*/
var movieData = require('./data.json');

var movies = movieData.movies;

class MovieListWithListView extends Component{


	constructor(props){
		super(props);

		var ds = new ListView.DataSource({
			/*通过判断决定渲染哪些行组件，避免全部渲染影响效率*/
			rowHasChanged:(oldRow,newRow) =>  
			oldRow !== newRow
		});
		this.state={
			/*设置dataSource时不直接使用原始数据，使用拷贝份*/
			dataSource:ds.cloneWithRows(movies)
		}
	}
	_renderRow(movie){
		return(
			<View style={styles.row}>
				<Image
					style={styles.thumbnail}
					source={{uri:movie.posters.thumbnail}}
					defaultSource={require('./hanImg.png')}
					/>
				<View style={styles.rightContainer}>
					<Text style={styles.title}>{movie.title}</Text>
					<Text style={styles.year}>{movie.year}</Text>
				</View>

			</View>


		);
	}
	_renderHeader(){
		return(
			<View style={styles.header}>
				<Text style={styles.header_text}>Movie List </Text>
				<View style={styles.header_line}></View>
			</View>


		);

	}
	_renderSeparator(sectionID:number,rowID:number){
		return(
			
			<View style={styles.separator} key={sectionID*10+rowID}></View>
		);
	}

	render(){
		return(

			<ListView
			style={styles.listView}
			dataSource={this.state.dataSource}
			renderRow={this._renderRow}
			renderHeader={this._renderHeader}
			renderSeparator={this._renderSeparator}
			initialListSize={10}
			 />
		);
	} 
}

var styles = StyleSheet.create({
	listView:{
		flex:1,
		marginTop:25,
		backgroundColor:'#f5fcff'
	},

	/*行组件样式*/
	row:{
		flexDirection:'row',
		padding:5,
		alignItems:'center',
		backgroundColor:'#f5fcff'
	},
	thumbnail:{
		width:53,
		height:53,
		backgroundColor:'gray'
	},
	rightContainer:{
		marginLeft:10,
		flex:1,

	},
	title:{
		fontSize:18,
		marginTop:3,
		marginBottom:3,
		textAlign:'center'
	},
	year:{
		marginBottom:3,
		textAlign:'center'
	},

	/*header组件样式*/
	header:{
		height:44,
		backgroundColor:'#f5fcff',

	},
	header_text:{
		flex:1,
		fontSize:20,
		fontWeight:'bold',
		textAlign:'center',
		lineHeight:44
	},
	header_line:{
		height:1,
		backgroundColor:'#cccccc',
	},
	/*分割线*/
	separator:{
		backgroundColor:'#cccccc',
		height:1,
	}

});


export default MovieListWithListView;
 

