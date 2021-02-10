import { StyleSheet } from "react-native";

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
  shadow: {
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
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  textHeader: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  textSection: {
    fontSize: 12,
    borderBottomWidth: 0.5,
    width: 110,
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
    backgroundColor: 'rgba(0,0,0,.5)',
    paddingHorizontal: 20,
    paddingVertical: 5, 
    color: '#fff',
    fontSize: 12,
    marginTop: 50
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
  btnTouch: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textShop: {
    fontWeight: 'bold',
  },
});