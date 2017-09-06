import React,{Component} from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Text,
} from 'react-native';

class AssFlower extends Component{
  constructor(props){
    super(props);
    this.state={
      display:true,
    }
    this.repeat = this.repeat.bind(this);
     console.log(`初始状态:${this.state.display}`);
  }
  repeat(){
     setInterval(()=>{
      this.setState({
        display:!this.state.display,
      });
      
    },1000)
  }

  componentDidMount(){
    this.repeat();
  }
  render(){
    return(
      <View style={styles.container}>
         <ActivityIndicator 
         style={styles.flower}
          animating={this.state.display}
          size='small'/>
          <Text
          style={styles.text}
          >{this.state.display? '显示' : '隐藏'}</Text>
      </View>
       
    );
  }
}

const styles = StyleSheet.create({
  container:{
    marginTop:64,
    height:64,
    justifyContent:'center',
    alignItems:'center',

  },
  flower:{
    marginBottom:10,
  },
  text:{
    color:'#f00'
  }
})

export default AssFlower;