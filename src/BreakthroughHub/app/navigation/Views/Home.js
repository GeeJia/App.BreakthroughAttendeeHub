import * as React from 'react';
import { View, Text } from 'react-native';

import MainContainer  from './../MainContainer';

export default function Home({navigation}) {
    return(
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Text onPress={() => alert('This is "HOME')}
                style={{ fontSize:26, fontWeight: 'bold'}}> Home Screen </Text>
        </View>
    )
};