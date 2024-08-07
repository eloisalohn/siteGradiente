import React from "react";
import {Text, View} from 'react-native';

const style = function(){
    return ({
        container: {
            flex: 1,
            justifycontent: 'center',
            alingitems: 'center',
        },
    })
}

export default  function (){
   return <View style={style().container}>
        <Text>TESTEEEEEE</Text>
   </View>
}  