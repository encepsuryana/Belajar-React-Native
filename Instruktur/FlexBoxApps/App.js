import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
 
export default class Example extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
        <View style={arah.kotak}></View>
        <View style={arah.kotak}></View>
        <View style={arah.kotak}></View>
        <View style={arah.kotak}></View>
        <View style={arah.kotak}></View>
        <View style={arah.kotak}></View>
      </View>
    )
  }
}

const arah = StyleSheet.create({
  kotak: {
    height: 100,
    width:50,
    borderWidth: 1,
    backgroundColor: 'red',
    margin: 5
  }
});