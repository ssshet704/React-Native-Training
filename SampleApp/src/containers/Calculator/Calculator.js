import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback
} from 'react-native';
import { styles } from './Calculator.styles';
import { buttons } from '../../config/buttons'
import { RNCamera } from 'react-native-camera';
export default class Calculator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      output: 0,
      expression: ""
    }
  }

  _handleOnPress = (value) => {
    console.log(value);
    switch (value) {
      case '=': this.setState({
        output: eval(this.state.expression)
      })
        break;
      case 'CLEAR':
        this.setState({
          output: 0,
          expression: ""
        });
        break;
      case 'DEL': this.setState((prevState) => ({
        expression: prevState.expression.substring(0,prevState.expression.length-1)
      }));
        break;
      default: this.setState((prevState) => ({
        expression: prevState.expression + value
      }));
    }

  }

  render() {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.data_display}>
            <View style={styles.output}>
              <Text>output:</Text>
              <Text style={styles.data}>{this.state.output}</Text>
            </View>
            <View style={styles.expression}>
              <Text style={styles.data}>{this.state.expression}</Text>
            </View>
          </View>
          <View style={styles.input_buttons}>

            {
              buttons.map((row, index) => (
                <View key={index} style={styles.contRow}>
                  {
                    row.map((col, index) => (
                      <TouchableNativeFeedback
                        key={index}
                        onPress={() => this._handleOnPress(col)}
                        background={TouchableNativeFeedback.SelectableBackground()}>
                        <View style={styles.contButton}>
                          <Text style={styles.txtDefault}>{col}</Text>
                        </View>
                      </TouchableNativeFeedback>
                    ))
                  }
                </View>
              ))
            }
          </View>
          {/* <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={{
            flex: 1,
            width: '100%',
          }}
        >
        </RNCamera> */}
        </View>
      </>)
  }
}

