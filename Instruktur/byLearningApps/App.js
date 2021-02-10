// /* eslint-disable no-unused-vars */
// import React from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   Image,
//   ImageBackground,
//   TouchableHighlight,
// } from 'react-native';
// import ViewPager from '@react-native-community/viewpager';
// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';
// import { createDrawerNavigator,DrawerActions } from "react-navigation-drawer";
// import { createBottomTabNavigator } from "react-navigation-tabs";

// import {styles} from './src/style/Style';
// import shopScreen from './src/screen/Shop';

// const stactOption = (props) => {
//   return {
//     headerStyle: {
//       backgroundColor: '#eee',
//     },
//     headerTitle: () => (
//       <View style={styles.header}>
//         <Text style={styles.judulTulisan}>by.Learning</Text>
//       </View>
//     ),
//     headerLeft: () => (
//       <TouchableHighlight onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}>
//         <Image style={{width: 30, height: 30, marginLeft: 10}} source={{uri: 'https://img.icons8.com/ios/24/000000/menu--v1.png'}}/>
//       </TouchableHighlight>
//     ),
//   };
// };

// function App(props) {
//   return (
//     <View style={styles.wrapper}>
// <View>
//   <ViewPager
//     showPageIndicator={true}
//     style={styles.vBanner}
//     initialPage={0}>
//     <View key="1">
//       <Image
//         style={styles.banner}
//         source={require('./src/images/banner-babastudio.webp')}
//       />
//     </View>
//     <View key="2">
//       <Image
//         style={styles.banner}
//         source={require('./src/images/banner-babastudio.webp')}
//       />
//     </View>
//     <View key="3">
//       <Image
//         style={styles.banner}
//         source={require('./src/images/banner-babastudio.webp')}
//       />
//     </View>
//   </ViewPager>
// </View>

//       <ScrollView>
//         <View style={[styles.container, styles.bayangan]}>
//           <Text style={styles.judulSection}>Popular eLerning</Text>
//           <ScrollView horizontal={true}>
//             <View>
//               <ImageBackground
//                 source={require('./src/images/paket-internet-marketing.webp')}
//                 style={styles.boxBanner}>
//                 <Text style={styles.textBanner}>Website</Text>
//               </ImageBackground>
//               <Text style={styles.descBanner}>Build Website React..</Text>
//             </View>

//             <View>
//               <ImageBackground
//                 source={require('./src/images/paket-internet-marketing.webp')}
//                 style={styles.boxBanner}>
//                 <Text style={styles.textBanner}>Website</Text>
//               </ImageBackground>
//               <Text style={styles.descBanner}>Build Website React..</Text>
//             </View>

//             <View>
//               <ImageBackground
//                 source={require('./src/images/paket-internet-marketing.webp')}
//                 style={styles.boxBanner}>
//                 <Text style={styles.textBanner}>Website</Text>
//               </ImageBackground>
//               <Text style={styles.descBanner}>Build Website React..</Text>
//             </View>

//             <View>
//               <ImageBackground
//                 source={require('./src/images/paket-internet-marketing.webp')}
//                 style={styles.boxBanner}>
//                 <Text style={styles.textBanner}>Website</Text>
//               </ImageBackground>
//               <Text style={styles.descBanner}>Build Website React..</Text>
//             </View>
//           </ScrollView>
//         </View>

//         <View style={[styles.container, styles.bayangan]}>
//           <TouchableHighlight
//             // eslint-disable-next-line react-native/no-inline-styles
//             style={{
//               backgroundColor: '#fff',
//               padding: 10,
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}
//             onPress={() => props.navigation.navigate('Shop')}>
//             <Text>Shop Now</Text>
//           </TouchableHighlight>
//         </View>
//       </ScrollView>

//       <View style={styles.footer}>
//         <Text style={styles.footerTulisan}>@2021</Text>
//       </View>
//     </View>
//   );
// }

// const drawerNavigator = createDrawerNavigator({
//   Home: {
//     screen: App,
//   },
//   Shop: {
//     screen: shopScreen
//   }
// });

// const appNavigator = createStackNavigator({
//   Home: {
//     screen: drawerNavigator,
//     navigationOptions: stactOption,
//   },
//   Shop: {
//     screen: shopScreen,
//   },
// });

// export default createAppContainer(appNavigator);

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

import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import ScreenShop from './src/screen/Shop';

import {styles} from './src/style/Style';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const stackOption = (props) => {
  return {
    headerStyle: {
      backgroundColor: '#eee',
    },
    headerTitle: () => (
      <View>
        <StatusBar animated backgroundColor="#eee" barStyle="dark-content" />
        {/* <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true}/> */}

        <View style={styles.header}>
          <Text style={styles.textHeader}>byLearning</Text>
        </View>
      </View>
    ),
  };
};

function App(props) {
  return (
    <View style={styles.wrapper}>
      <View>
        <ViewPager
          showPageIndicator={true}
          style={styles.vBanner}
          initialPage={0}>
          <View key="1">
            <Image
              style={styles.banner}
              source={require('./src/images/banner-babastudio.webp')}
            />
          </View>
          <View key="2">
            <Image
              style={styles.banner}
              source={require('./src/images/banner-babastudio.webp')}
            />
          </View>
          <View key="3">
            <Image
              style={styles.banner}
              source={require('./src/images/banner-babastudio.webp')}
            />
          </View>
        </ViewPager>
      </View>

      <ScrollView>
        <View style={[styles.container, styles.shadow]}>
          <Text style={styles.textSection}> Popular eLearning </Text>

          <ScrollView horizontal={true}>
            <View>
              <ImageBackground
                source={require('./src/images/paket-internet-marketing.webp')}
                style={styles.boxBanner}>
                <Text style={styles.textBanner}>Website</Text>
              </ImageBackground>
              <Text style={styles.descBanner}>Build Website React..</Text>
            </View>

            <View>
              <ImageBackground
                source={require('./src/images/paket-internet-marketing.webp')}
                style={styles.boxBanner}>
                <Text style={styles.textBanner}>Website</Text>
              </ImageBackground>
              <Text style={styles.descBanner}>Build Website React..</Text>
            </View>

            <View>
              <ImageBackground
                source={require('./src/images/paket-internet-marketing.webp')}
                style={styles.boxBanner}>
                <Text style={styles.textBanner}>Website</Text>
              </ImageBackground>
              <Text style={styles.descBanner}>Build Website React..</Text>
            </View>

            <View>
              <ImageBackground
                source={require('./src/images/paket-internet-marketing.webp')}
                style={styles.boxBanner}>
                <Text style={styles.textBanner}>Website</Text>
              </ImageBackground>
              <Text style={styles.descBanner}>Build Website React..</Text>
            </View>
          </ScrollView>
        </View>

        <View style={[styles.container, styles.shadow]}>
          <TouchableHighlight
            style={styles.btnTouch}
            onPress={() => props.navigation.navigate('Shop')}>
            <Text style={styles.textShop}>SHOP NOW</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
  );
}

const appNavigator = createStackNavigator({
  Home: {
    screen: App,
    navigationOptions: stackOption,
  },
  Shop: {
    screen: ScreenShop,
  },
});
export default createAppContainer(appNavigator);