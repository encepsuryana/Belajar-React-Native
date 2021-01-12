import React, {Component} from 'react';
import {View,Text} from 'react-native';

export default class FlexDirection extends Component {
  render() {
    return (
      // // Flex Start
      // <View style={{flexDirection:'row', justifyContent: 'Flex-start'}}>
      //   <View style={{height:50, width:50, backgroundColor: 'red'}}></View>
      //   <View style={{height:50, width:50, backgroundColor: 'blue'}}></View> 
      //   <View style={{height:50, width:50, backgroundColor: 'green'}}></View> 
      //   <View style={{height:50, width:50, backgroundColor: 'black'}}></View>  
      // </View>

      // Center
      // <View style={{flexDirection:'row', justifyContent: 'center'}}>
      //   <View style={{height:50, width:50, backgroundColor: 'red'}}></View>
      //   <View style={{height:50, width:50, backgroundColor: 'blue'}}></View> 
      //   <View style={{height:50, width:50, backgroundColor: 'green'}}></View> 
      //   <View style={{height:50, width:50, backgroundColor: 'black'}}></View>  
      // </View>

      // Flex-end
      // <View style={{flexDirection:'row', justifyContent: 'flex-end'}}>
      //   <View style={{height:50, width:50, backgroundColor: 'red'}}></View>
      //   <View style={{height:50, width:50, backgroundColor: 'blue'}}></View> 
      //   <View style={{height:50, width:50, backgroundColor: 'green'}}></View> 
      //   <View style={{height:50, width:50, backgroundColor: 'black'}}></View>  
      // </View>

      // Space-between
      // <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
      //   <View style={{height:50, width:50, backgroundColor: 'red'}}></View>
      //   <View style={{height:50, width:50, backgroundColor: 'blue'}}></View> 
      //   <View style={{height:50, width:50, backgroundColor: 'green'}}></View> 
      //   <View style={{height:50, width:50, backgroundColor: 'black'}}></View>  
      // </View>

      // Space-around
      <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
        <View style={{height:50, width:50, backgroundColor: 'red'}}></View>
        <View style={{height:50, width:50, backgroundColor: 'blue'}}></View> 
        <View style={{height:50, width:50, backgroundColor: 'green'}}></View> 
        <View style={{height:50, width:50, backgroundColor: 'black'}}></View>  
      </View>
    )
  }
}
