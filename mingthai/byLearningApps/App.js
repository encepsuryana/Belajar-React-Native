import React from 'react';
import { StatusBar, Text, View } from 'react-native';

function App(props) {
  return (
    <View style={{backgroundColor: 'cyan'}}>
      <StatusBar animated  backgroundColor='cyan' barStyle='dark-content' />
      <Text style={{textDecorationLine:'underline' }}>Selamat Datang di react Native</Text>
      <Text style={{borderBottomWidth: 1 }}>Selamat Datang di react Native</Text>
      <Text style={{textAlign: 'center'}}>Selamat Datang di react Native</Text>    
      <Text style={{textAlign: 'right'}}>Selamat Datang di react Native</Text>    
      <Text style={{fontWeight: 'bold'}}>Selamat Datang di react Native</Text>    
      <Text style={{fontStyle: 'italic'}}>Selamat Datang di react Native</Text>  
      <Text style={{textTransform: 'capitalize'}}>Selamat Datang di react Native</Text>  
      <Text style={{textTransform: 'lowercase'}}>Selamat Datang di react Native</Text>  
      <Text style={{textTransform: 'uppercase'}}>Selamat Datang di react Native</Text>  
      

    </View>
  );
}

export default App;