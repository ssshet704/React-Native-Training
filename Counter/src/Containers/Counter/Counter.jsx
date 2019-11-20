import React from 'react';
import { Component } from 'react';
import { View, Text } from 'react-native';

import { CounterButton } from '../../Components/CounterButton/CounterButton'
import { Message } from '../../Components/Message/Message'

import { styles } from './Counter.styles'


export default class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            session: 0
        }
    }

    currentSession = (count) => {
        switch (count) {
            case 5: return 1;
                break;
            case 10: return 2;
                break;
            default: return 0;
        }
    }
    //Add value to counter
    addToCounter = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1,
            session: this.currentSession(prevState.counter + 1)
        }));
    }

    //Substract value from counter 
    substractFromCounter = () => {
        this.setState((prevState) => ({
            counter: (prevState.counter > 0) ? prevState.counter - 1 : 0,
            session: this.currentSession(prevState.counter - 1)
        }));
    }

    render() {
        const { counter, session } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.counter}>
                    <CounterButton name="+" onclick={this.addToCounter}></CounterButton>
                    <View style={styles.countervalue}><Text >{counter}</Text></View>
                    <CounterButton name="-" onclick={this.substractFromCounter}></CounterButton>
                </View>
                {session > 0 && <View style={styles.messagecontainer}>
                    <Message session={session}></Message>
                </View>}
            </View>

        )
    }
}