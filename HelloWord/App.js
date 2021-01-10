import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

const App = () => {
  return (
    <ScrollView style={{alignContent: 'center'}}>
      <Text>Some text</Text>
      <View>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{
          height: 50,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 20,
          paddingLeft: 20,
          paddingRight: 20
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
}

export default App;