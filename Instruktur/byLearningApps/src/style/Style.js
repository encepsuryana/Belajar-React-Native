import {StyleSheet, Dimensions} from 'react-native';
var {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '90%',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 15,
  },
  footer: {
    backgroundColor: '#270995',
    height: 50,
    color: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  footerTulisan: {
    color: 'white',
  },
  bayangan: {
    shadowColor: '#000',
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
  },
  judulTulisan: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  judulSection: {
    fontSize: 12,
    borderBottomWidth: 1,
    width: 100,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  boxBanner: {
    width: 100,
    height: 70,
    justifyContent: 'center',
    alignSelf: 'center',
    marginHorizontal: 0,
    marginRight: 10,
    resizeMode: 'cover',
  },
  textBanner: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 20,
    paddingVertical: 5,
    color: 'white',
    fontSize: 12,
  },
  descBanner: {
    fontSize: 10,
    paddingVertical: 5,
  },
  vBanner: {
    width: '100%',
    height: 200,
    backgroundColor: 'white',
  },
  banner: {
    width: '100%',
    height: 200,
  },
  bigBanner: {
    width: width,
    height: 300,
    justifyContent: 'center',
    alignSelf: 'center',
    resizeMode: 'cover',
  },
});
