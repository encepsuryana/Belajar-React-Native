import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class FlexDirection extends Component {
  render() {
    return(
      // Flex Start
      // <View style={{flexDirection: 'row', justifyContent:'flex-start'}}>
      //   <View style={{height:50, width:50, backgroundColor: 'red'}}></View>
      //   <View style={{height:50, width:50, backgroundColor: 'blue'}}></View>
      //   <View style={{height:50, width:50, backgroundColor: 'green'}}></View>
      //   <View style={{height:50, width:50, backgroundColor: 'black'}}></View>
      // </View>

      // Center
      <View style={{flexDirection: 'row', justifyContent:'center'}}>
        <View style={{height:50, width:50, backgroundColor: 'red'}}></View>
        <View style={{height:50, width:50, backgroundColor: 'blue'}}></View>
        <View style={{height:50, width:50, backgroundColor: 'green'}}></View>
        <View style={{height:50, width:50, backgroundColor: 'black'}}></View>
      </View>
    )
  }
}