import React, { Component } from 'react';
import {View, Text, StyleSheet, ScrollView, Image, ImageBackground} from 'react-native';

export default class dataCustomers extends Component {
  render() {
    return(
       <View style={tampilan.wrapper}>
         <View style={tampilan.header}>
            <Text style={tampilan.judulTulisan}>Hello React Native!</Text>
         </View>

         <ScrollView>
            <View style={[tampilan.container]}>
                <Text style={tampilan.judulSection}>List Cust</Text>
                <scrollView horizontal={true}>
                  <ImageBackground style={tampilan.boxBanner}>source={require('./src/images/banner-babastudio.webp')}</ImageBackground>
                  <Text style={tampilan.textBanner}>Website</Text>
                </scrollView>
            </View>

         </ScrollView>

         
       </View> 
    );
  }
}

const tampilan = StyleSheet.create({
  wrapper:  {
    flex:1
  }, 
  container: {
    borderColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '90%',
    alignSelf: 'center',
    marginVertical: 15
  },
  header: {
    backgroundColor: '#eee',
    height: 50,
    color: 'blue',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  judulTulisan: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  judulSection: {
    fontSize: 18,
    borderBottomWidth: 1,
    width: 80,
    marginBottom: 10
  },
  boxBanner: {
    width: 100,
    height: 70,
    justifyContent: 'center',
    alignSelf: 'center',
    marginHorizontal: 10
  },
  textBanner: {
    borderColor:'rgba(0,0,0,0.5)',
    paddingHorizontal: 20,
    paddingVertical: 5,
    color : 'white',
    fontSize: 14
  }

 })
































// import React, {Component} from 'react';
// import {View,Text} from 'react-native';

// export default class FlexDirection extends Component {
//   render() {
//     return (
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
      // <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
      //   <View style={{height:50, width:50, backgroundColor: 'red'}}></View>
      //   <View style={{height:50, width:50, backgroundColor: 'blue'}}></View> 
      //   <View style={{height:50, width:50, backgroundColor: 'green'}}></View> 
      //   <View style={{height:50, width:50, backgroundColor: 'black'}}></View>  
      // </View>
//     )
//   }
// }
