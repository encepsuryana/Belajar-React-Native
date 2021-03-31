import React from 'react';
import { View, Text, StatusBar } from 'react-native';

function App(props) {
  return (
    <View style={{backgroundColor: 'cyan' }}>
      <StatusBar animated backgroundColor='cyan' barStyle='dark-content'/>
      <Text style={{textDecorationLine: 'underline'}}>Selamat datang di react Native</Text>
      <Text style={{borderBottomWidth: 1}}>Selamat datang di react Native</Text>
      <Text style={{textAlign: 'center'}}>Selamat datang di react Native</Text>
      <Text style={{textAlign: 'right'}}>Selamat datang di react Native</Text>
      <Text style={{fontWeight: 'bold'}}>Selamat datang di react Native</Text>
      <Text style={{fontStyle: 'italic'}}>Selamat datang di react Native</Text>
      <Text style={{textTransform: 'capitalize'}}>Selamat datang di react Native</Text>
      <Text style={{textTransform: 'lowercase'}}>Selamat datang di react Native</Text>
      <Text style={{textTransform: 'uppercase'}}>Selamat datang di react Native</Text>
    </View>
  );
}

export default App;