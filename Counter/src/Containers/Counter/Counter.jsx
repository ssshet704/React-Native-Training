import React from 'react';
import { Component } from 'react';
import { View, Text } from 'react-native';

import { CounterButton } from '../../Components/CounterButton/CounterButton'
import {styles} from './Counter.styles'

export default class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    //Add value to counter
    addToCounter =()=>{
        this.setState((prevState)=>({
            counter:prevState.counter+1
        }));
    }

    //Substract value from counter 
    substractFromCounter =()=>{
        this.setState((prevState)=>({
            counter:(prevState.counter>0)?prevState.counter-1:0
        }));
    }

    render() {
        const { counter } = this.state;
        return (
            <View style={styles.counter}>
                <CounterButton name="Add" onclick={this.addToCounter}></CounterButton>
                <View><Text>{counter}</Text></View>
                <CounterButton name="Sub" onclick={this.substractFromCounter}></CounterButton>
            </View>
        )
    }


}