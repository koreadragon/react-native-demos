import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  RefreshControl,
  Image,
  ListView,
  TextInput
} from 'react-native';

class MyButton extends Component{
  _onPress(){
    alert(`嘤嘤嘤`)
  }

  render(){
    return (
        <View style = {styles.container}>
              <TouchableHighlight 
              onPress={this._onPress.bind(this)}
              style={styles.button}>
                  <Text style={styles.text}>点我</Text>
              </TouchableHighlight>
        </View>

    );
  }
}

const styles = StyleSheet.create({
  container:{
    
    marginTop:64,
    justifyContent:'flex-start',
    height:450,
    backgroundColor:'lightgray',
    alignItems:'center'
  },
  button:{
    height:45,
    width:120,
    backgroundColor:'green',
    
    justifyContent:'center',
    alignItems:'center',
    borderRadius:3,
    
  },
  text:{
    color:'white',
    fontWeight:'bold',
    fontSize:17
  }
})

export default MyButton;