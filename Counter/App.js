/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { SafeAreaView } from 'react-native';

import Counter from './src/Containers/Counter/Counter';
import {styles} from './App.Styles';

const App: () => React$Node = () => {
  return (
      <SafeAreaView style={styles.layout}>
        <Counter></Counter>
      </SafeAreaView>
  );
};

export default App;
