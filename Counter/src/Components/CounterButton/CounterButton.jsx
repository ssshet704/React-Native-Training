import React from 'react';
import {Text,TouchableOpacity} from 'react-native';

import {styles} from './CounterButton.styles'


const CounterButton = (props) =>{
    return <TouchableOpacity onPress={props.onclick} style={styles.counterButton}>
                <Text style={styles.counterButtonText}>{props.name}</Text>
            </TouchableOpacity>
}
export {CounterButton};