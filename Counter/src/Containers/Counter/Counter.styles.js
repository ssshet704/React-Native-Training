import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
  container: {
    height: screenWidth - 50,
    width: screenWidth - 50,
    borderRadius: screenWidth / 2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  counter: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10
  },
  countervalue: {
    padding: 10
  },
  messagecontainer: {
    marginTop: 10,
    flexDirection: 'row'
  }
});

export { styles };

