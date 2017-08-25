import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Detail extends Component{
	show(){
		alert(this.props.title);
	}

	constructor(props) {
	    super(props);
	    /*this.state = {
	    	title: ''
	    };*/
	    this.show = this.show.bind(this);
  	}
  	render (){
		 
		return(
				<Text 
					onPress = {this.show}
					numberOfLines={this.props.numberOfLines}
					key={this.props.key} 
					style={this.props.style}
					>
					{ this.props.title}
				</Text> 
				
			);
	}
}

class News extends Component {

	render (){
		var newsComponents = [];
		for(var i in  this.props.news){
			var text = (
				<Detail 
					numberOfLines={2}
					key={i} 
					style={styles.news_item}
					title={this.props.news[i]}
				/>
					  

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
	
 }

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