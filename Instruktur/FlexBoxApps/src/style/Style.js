import {StyleSheet} from 'react-native';

export const tampilan = StyleSheet.create({
    wrapper: {
      flex: 1
    },
    container: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      width: '90%',
      alignSelf: 'center',
      marginVertical: 15
    },
    footer: {
      backgroundColor: '#270995',
      height: 50,
      color: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 20,
      paddingRight: 20
    },
    footerTulisan: {
      color: 'white'
    },
    bayangan: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
  
      elevation: 4,
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
      backgroundColor: 'rgba(0,0,0,0.5)',
      paddingHorizontal: 20,
      paddingVertical: 5,
      color: 'white',
      fontSize: 14
    },
    vBanner: {
      width: '100%',
      height: 200,
      backgroundColor:'white'
    },
    banner: {
      width: '100%',
      height: 200
    }
  });