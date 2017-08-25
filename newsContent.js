import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var News = React.createClass({

	show:function (title){
		alert(title);
	},

	

	render:function(){
		var newsComponents = [];
		for(var i in this.props.news){
			var text = (
				<Text 
					onPress = {this.show.bind(this,this.props.news[i])}
					numberOfLines={2}
					key={i} 
					style={styles.news_item}
					>
					{this.props.news[i]}
				</Text>

			);

			newsComponents.push(text);
		}	

		return(
				<View style={styles.flex}>
					<Text style={styles.news_title}>今日要闻</Text>
					{newsComponents}
				</View>
					


			);

	}
	
});

let styles = StyleSheet.create({
	flex:{
		flex:1,
	},
	news_title:{
		fontSize:20,
		fontWeight:'bold',
		color:'#cd1d1c',
		marginLeft:10,
		marginTop:15,
	},
	news_item:{
		marginTop:10,
		marginLeft:10,
		marginRight:10,
		fontSize:15,
		lineHeight:30,
	}

});

export default  News;