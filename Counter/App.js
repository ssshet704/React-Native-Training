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

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView>
        <Counter></Counter>
      </SafeAreaView>
    </>
  );
};

export default App;
