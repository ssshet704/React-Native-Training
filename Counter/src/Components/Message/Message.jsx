import React from 'react';
import {View,Text} from 'react-native';

import {styles} from './Message.styles'
import {Messages} from '../../Constants/Messages'

const Message = (props) =>{
return <View style={styles.messagecontainer}>
            <Text style={styles.Message}>{Messages.Session}{props.session}</Text>
        </View>
                
}
export {Message};

