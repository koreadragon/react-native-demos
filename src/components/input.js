import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  FlatList,

} from 'react-native';
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';


class MovieList extends Component{

	constructor(props){
		super(props);
		this.state={
			movies:null,
		}
	}
	render()
    {
        if (!this.state.movies) {
            return this.renderLoadingView();
        }
        var movie = this.state.movies;
        return this.renderMovie(movie);
    }
 
	fetchData()
    {
        fetch(REQUEST_URL, {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({
                movies:responseData.movies,
            });
        })
        .catch((error) => {
                callback(error);
        });
    }
 

	componentDidMount(){
		 this.fetchData();
	}
	renderLoadingView()
    {
        return (
            <View style={styles.container}>
            <Text>
            正在加载电影数据......
            </Text>
            </View>
            );
    }

    renderMovie(movies)
    {

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

 

const styles = StyleSheet.create({
    container:{
        flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#F5FCFF'
    },
    thumbnail:{
        width:100,height:80
    },
    rightContainer:{
        flex:1
    },
    title:{
        fontSize:20,marginBottom:8,textAlign:'center'
    },
    year:{
        textAlign:'center'
    },
});
 

export default MovieList;