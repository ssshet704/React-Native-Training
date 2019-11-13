import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  data_display: {
    flex: 0.3,
    backgroundColor: 'white'
  },
  input_buttons: {
    flex: 0.7
  },
  txtDefault: {
    color: '#fff',
    fontFamily: 'Helvetica-Light',
    fontSize: 20,
    fontWeight: '800'
  },
  contRow: {
    flex: 1,
    flexDirection: 'row'
  },

  contButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: '#ecf0f1',
    backgroundColor: 'grey'

  },
  output: {
    flex: 0.5,
    backgroundColor: 'yellow',
    alignItems: 'flex-end',

    justifyContent: 'center',
    paddingRight: 10
  },
  expression: {
    flex: 0.5,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10
  },
  data: {
    fontSize: 30,
    fontWeight: 'bold',
  }

});

export { styles };