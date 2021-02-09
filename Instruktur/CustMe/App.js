/* eslint-disable no-unused-vars */
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {tampilan} from './src/style/Style';
import shopScreen from './src/screen/Shop';
import drawerNavigator from 'react-navigation-drawer/lib/typescript/src/navigators/createDrawerNavigator';

const stactOption = (props) => {
  return {
    headerStyle: {
      backgroundColor: '#eee',
    },
    headerTitle: () => (
      <View style={tampilan.header}>
        <Text style={tampilan.judulTulisan}>Cust.Me!</Text>
      </View>
    ),
  };
};

function App(props) {
  return (
    <View style={tampilan.wrapper}>
      <View style={tampilan.header}>
        <Text style={tampilan.judulTulisan}>eLearning</Text>
      </View>
      <View>
        <ViewPager
          showPageIndicator={true}
          style={tampilan.vBanner}
          initialPage={0}>
          <View key="1">
            <Image
              style={tampilan.banner}
              source={require('./src/images/banner-babastudio.webp')}
            />
          </View>
          <View key="2">
            <Image
              style={tampilan.banner}
              source={require('./src/images/banner-babastudio.webp')}
            />
          </View>
          <View key="3">
            <Image
              style={tampilan.banner}
              source={require('./src/images/banner-babastudio.webp')}
            />
          </View>
        </ViewPager>
      </View>

      <ScrollView>
        <View style={[tampilan.container, tampilan.bayangan]}>
          <Text style={tampilan.judulSection}>Popular eLerning</Text>
          <ScrollView horizontal={true}>
            <View>
              <ImageBackground
                source={require('./src/images/paket-internet-marketing.webp')}
                style={tampilan.boxBanner}>
                <Text style={tampilan.textBanner}>Website</Text>
              </ImageBackground>
              <Text style={tampilan.descBanner}>Build Website React..</Text>
            </View>

            <View>
              <ImageBackground
                source={require('./src/images/paket-internet-marketing.webp')}
                style={tampilan.boxBanner}>
                <Text style={tampilan.textBanner}>Website</Text>
              </ImageBackground>
              <Text style={tampilan.descBanner}>Build Website React..</Text>
            </View>

            <View>
              <ImageBackground
                source={require('./src/images/paket-internet-marketing.webp')}
                style={tampilan.boxBanner}>
                <Text style={tampilan.textBanner}>Website</Text>
              </ImageBackground>
              <Text style={tampilan.descBanner}>Build Website React..</Text>
            </View>

            <View>
              <ImageBackground
                source={require('./src/images/paket-internet-marketing.webp')}
                style={tampilan.boxBanner}>
                <Text style={tampilan.textBanner}>Website</Text>
              </ImageBackground>
              <Text style={tampilan.descBanner}>Build Website React..</Text>
            </View>
          </ScrollView>
        </View>

        <View style={[tampilan.container, tampilan.bayangan]}>
          <TouchableHighlight
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              backgroundColor: '#fff',
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => props.navigation.navigate('Shop')}>
            <Text>Shop Now</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>

      <View style={tampilan.footer}>
        <Text style={tampilan.footerTulisan}>@2021</Text>
      </View>
    </View>
  );
}

const appNavigator = createStackNavigator({
  Home: {
    screen: App,
    navigationOptions: stactOption,
  },
  Shop: {
    screen: shopScreen,
  },
});

export default createAppContainer(appNavigator);

// import React, {Component} from 'react';
// import {View, Text} from 'react-native';

// export default class FlexDirection extends Component {
//   render() {
//     return(
//       // Flex Start
//       // <View style={{flexDirection: 'row', justifyContent:'flex-start'}}>
//       //   <View style={{height:50, width:50, backgroundColor: 'red'}}></View>
//       //   <View style={{height:50, width:50, backgroundColor: 'blue'}}></View>
//       //   <View style={{height:50, width:50, backgroundColor: 'green'}}></View>
//       //   <View style={{height:50, width:50, backgroundColor: 'black'}}></View>
//       // </View>

//       // Center
//       // <View style={{flexDirection: 'row', justifyContent:'center'}}>
//       //   <View style={{height:50, width:50, backgroundColor: 'red'}}></View>
//       //   <View style={{height:50, width:50, backgroundColor: 'blue'}}></View>
//       //   <View style={{height:50, width:50, backgroundColor: 'green'}}></View>
//       //   <View style={{height:50, width:50, backgroundColor: 'black'}}></View>
//       // </View>
//     )
//   }
// }

// import React, { Component } from 'react';
// import { View, Text, Image, ActivityIndicator, FlatList } from 'react-native';

// export default class PeoplePage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         dataPeople:[],
//         isLoading:true
//     };
//   }

//   componentDidMount = () => {
//     this._fetchItem()
//   }

//     _fetchItem = ()=>{
//         return fetch('https://randomuser.me/api/?results=20')
//         .then((response)=>response.json())
//         .then((responseJson)=>{
//             this.setState({
//                 isLoading:false,
//                 dataPeople:responseJson.results
//             });
//         })
//         .catch((error)=>{
//             console.error(error)
//         })
//     }

//     _itemCoponent=({item})=>{
//         return(
//             <View style={{flex:1,flexDirection: 'row', marginLeft: 10, marginRight: 10}} >
//                 <View style={{height:60,justifyContent: 'center', paddingRight: 10}}>
//                     <Image source={{uri: item.picture.medium }}
//                     style={{width:40,height:40,borderRadius: 25,}}
//                     />
//                 </View>

//                 <View style={{flex:2,height:60}}>
//                     <Text style={{paddingTop: 5}} >{item.name.first} {item.name.last}</Text>
//                     <Text style={{ paddingTop: 2}}>{item.email}</Text>
//                 </View>
//             </View>
//         )
//     }

// _separatorComponent=()=>{
//     return(
//         <View style={{backgroundColor:'grey',height:0.5}}></View>
//     )
// }

//     render() {
//         if (this.state.isLoading) {
//             return(
//                 <View style={{padding:20}}>
//                     <ActivityIndicator/>
//                 </View>
//             )
//         }
//         return (
//         <View>
//           <Text style={{padding: 20, fontWeight: 'bold', fontSize: 18, backgroundColor: 'green', color: '#fff'}}>Nerby People</Text>
//             <FlatList
//                 data={this.state.dataPeople}
//                 renderItem={this._itemCoponent}
//                 keyExtractor={(item,index)=>index.toString()}
//                 // ItemSeparatorComponent={this._separatorComponent}
//                 onRefresh={this._fetchItem}
//                 refreshing={this.state.isLoading}
//             />
//         </View>
//         );
//     }
// }
