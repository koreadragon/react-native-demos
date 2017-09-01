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
  TextInput
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';

class InputPage extends Component{
  constructor(props){
    super(props);
 
    this.state={
       
      text:''
    }
    this.getInputContent = this.getInputContent.bind(this);
    this.pushNextPage = this.pushNextPage.bind(this);
  }

  getInputContent(iputText){
    this.setState({
      text:iputText
    })
  }

  pushNextPage(){
    var nextRoute={
      component:DetailPage,
      passProps:{
        showText:this.state.text
      }
    }
    this.props.navigator.push(nextRoute);
  }

  render(){
    return(

      <View style={inputStyle.container}>
      <TextInput style={inputStyle.input}
        placeholder='请输入内容' 
        onChangeText={this.getInputContent}
        />
        <TouchableOpacity style={inputStyle.button} 
        onPress={this.pushNextPage}>
          <Text>进入下一页</Text>
        </TouchableOpacity>
      </View>

    );
  }

}


class DetailPage extends Component{
  constructor(props){
    super(props);
    this.popFrontPage = this.popFrontPage.bind(this);
  }
  popFrontPage(){
    this.props.navigator.pop();
  }
  render(){
    return(
      <View style={detailStyle.container}>
      <Text style={detailStyle.text}>{this.props.showText}</Text>
        <TouchableOpacity style={detailStyle.button} 
        onPress={this.popFrontPage}>
          <Text>返回上一页</Text>
        </TouchableOpacity>
      </View>

    );
  }
}

 

class PassValue extends Component{

  render(){

    var rootRoute={
      component:InputPage,
      /*存储需要传的值*/
      passProps:{

      }
    }
    return(
      <View style={{flex:1}}>
        <Navigator
        initialRoute={rootRoute}
        configureScene={
          (route) =>{
              return Navigator.SceneConfigs.PushFromRight;
          } 
        } 
        renderScene={(route,navigator) => {
          var GetSon= route.component;
          return(
            <GetSon 
            navigator={navigator}
            route={route}
            {...route.passProps}
            />
          );
        }}
        />
      </View>

    );
  }

}
 
export default PassValue;


/*///////////////////////////////////////////////////////////////////////////////*/
/*样式*/


var inputStyle=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
  },
  input:{
    height:45,
    marginLeft:25,
    marginRight:25,
    paddingLeft:5,
    borderWidth:1,
    borderColor:'black',
    borderRadius:4,
  },
  button:{
    marginTop:20,
    height:30,
    borderWidth:1,
    borderRadius:4,
    borderColor:'black',
    padding:5,
    justifyContent:'center',
    alignItems:'center'
  }
});

var detailStyle=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
  },
  text:{
    
    marginLeft:25,
    marginRight:25,
    padding:25,
    backgroundColor:'cyan',
    fontSize:20,
    textAlign:'center'
  },
  button:{
    marginTop:20,
    height:30,
    borderWidth:1,
    borderRadius:4,
    borderColor:'black',
    padding:5,
    justifyContent:'center',
    alignItems:'center'
  }
})