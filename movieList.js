import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  Image
} from 'react-native';


/*从文件中读取数据,默认调用了JSON.parse*/
var movieData = require('./data.json');

var movies = movieData.movies;

class MovieList extends Component{

	render(){

		var movieRows = [];
		for(var i in movies){
			var movie = movies[i];
			var row=(
			<View key={i} style={styles.row}>
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

			movieRows.push(row);
		}

 
		return(
			<View style={styles.container}>
				<ScrollView style={styles.ScrollView}>		 
					 {movieRows}
				</ScrollView>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	container:{
		flex:1,
		marginTop:25,
	},
	scrollView:{
		flex:1,
		marginTop:25,
		backgroundColor:'#f5fcff'
	},
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
	}

});


export default MovieList;
 

