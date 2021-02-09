import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';

function App(props) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>eLearning</Text>
      </View>

      <ScrollView>
        <View style={[styles.container, styles.shadow]}>
          <Text style={styles.textSection}>Popular eLearning</Text>
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 20,
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
  textSection: {
    fontSize: 12,
    borderBottomWidth: 1,
    width: 100,
    marginBottom: 10,
    fontWeight: 'bold',
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
});

export default App;