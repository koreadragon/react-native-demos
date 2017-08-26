/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Header from './header';
import News from './newsContent';
import Fuck from './fuck'; 
import HanImage from './myImage';
import Movie from './Movie';
import MovieList from './movieList';


let someNews = ['金三胖','特朗普发推','习大大万岁!']; 

function NewHeader (){
  return(
  	 
      <MovieList />
  	 
    )
}
  
AppRegistry.registerComponent('Hello', () => MovieList);
