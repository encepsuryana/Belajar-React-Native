import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

// function App(props) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.textRed}>Hello World!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems:'center'
//   },
//   textRed: {
//     color: 'blue'
//   }
// });

export default class Example extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection:'row', flexWrap: 'wrap'}}>
        <View style={styles.boxStyle}></View>
        <View style={styles.boxStyle}></View>
        <View style={styles.boxStyle}></View>
        <View style={styles.boxStyle}></View>
        <View style={styles.boxStyle}></View>
        <View style={styles.boxStyle}></View>
        <View style={styles.boxStyle}></View>
        <View style={styles.boxStyle}></View>
        <View style={styles.boxStyle}></View>
        <View style={styles.boxStyle}></View>
        <View style={styles.boxStyle}></View>
        <View style={styles.boxStyle}></View>
        <View style={styles.boxStyle}></View>
        <View style={styles.boxStyle}></View>
        <View style={styles.boxStyle}></View>
        <View style={styles.boxStyle}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  boxStyle: {
    height: 100,
    width: 50,
    borderWidth: 1,
    backgroundColor: 'orange',
    marginBottom: 5
  },
});


// export default App;